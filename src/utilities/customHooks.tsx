import React, {
    RefObject,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
    useTransition,
} from "react";
import blueStar from "assets/images/playful_shapes/blue-star.png";
import orangeRound from "assets/images/playful_shapes/orange-round.png";
import rectangle from "assets/images/playful_shapes/rectangle.png";
import roundRed from "assets/images/playful_shapes/round-red.png";
import roundGreen from "assets/images/playful_shapes/round-green.png";
import yellowBox from "assets/images/playful_shapes/yellow-box.png";
import { api, socialBackends, sprinklesAmount } from "./globalVariables";
import { randInt, randListItem } from "./random";
import { RoommateDetails, RoommateErrorDetails, FriendDetails, FriendErrorDetails } from "./typeDefs";
import {
    friendDetailsContext,
    friendErrorDetailsContext,
    roommateDetailsContext,
    roommateErrorDetailsContext,
    schoolContext,
    userContext,
} from "./contextDefinitions";
import { validateSelect } from "./handleFormSubmit";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import { routes } from "router";
import { useGoogleLogin } from "@react-oauth/google";
import { exchange_token, useSignInUser, useSignOutUser } from "./authentication";
import Axios, { AxiosUnprotected } from "axiosInstance";
import { handle401Unauthorized } from "./errorHandlers";
import { extractUrlFromImgData, getUrlParams } from "./helperFunctions";
import { decode } from "blurhash";

export function useResizeObserver(
    action: (entry: ResizeObserverEntry) => any,
    refElement: RefObject<HTMLElement>,
    returnEntry: boolean = false
): ResizeObserverEntry | null {
    const [entry, setEntry] = useState<ResizeObserverEntry | null>(null);
    const observer = new ResizeObserver(([entry]: ResizeObserverEntry[]) => {
        action(entry);
        if (returnEntry) setEntry(entry);
    });

    useEffect(() => {
        if (refElement.current === null) return;
        observer.observe(refElement.current);

        // cleanup observer before component unmounts
        return () => observer.disconnect();
    }, []);
    return entry;
}

export function useIntersectionObserver(
    action: (entry: IntersectionObserverEntry) => any,
    options: IntersectionObserverInit = {},
    ...refElements: RefObject<HTMLElement>[]
) {
    //
}

export function useAnimateIn(
    query: string = ".slide-in-rest",
    options: IntersectionObserverInit = { threshold: 0.7 },
    deps: any[] = []
) {
    const observer = useRef<IntersectionObserver>(
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.remove("slide-in-rest");
                    if (entry.target.classList.contains("animate-count")) {
                        let element = entry.target as HTMLElement;
                        let suffix = element.getAttribute("data-suffix") || "";
                        animateCount(element, 0, JSON.parse(element.innerHTML), suffix);
                    }
                    observer.current.unobserve(entry.target);
                });
            },
            { ...options }
        )
    );

    useEffect(() => {
        // run this code after the browser repaints
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                [...document.querySelectorAll(query)].forEach((element) => {
                    observer.current.observe(element);
                });
            }, 0);
        });

        // disconnect each element being observed by the observer
        return () => observer.current.disconnect();
    }, deps);
}

export function useScrollTopReload() {
    React.useEffect(() => {
        window.onbeforeunload = () => window.scrollTo(0, 0);
    }, []);
}

export function useSprinkles(amount: number = sprinklesAmount) {
    const [isPending, startTransition] = useTransition();
    const [shapesImg] = useState([blueStar, orangeRound, yellowBox, roundGreen, roundRed, rectangle]);
    const [shapes, setShapes] = useState<JSX.Element[]>();

    useEffect(() => {
        if (!shapesImg) return;
        let prevGap = 150;
        startTransition(() => {
            const shapeElements: JSX.Element[] = [];

            for (let i = 0; i < amount; i++) {
                const shapeImg = randListItem(shapesImg);
                shapeElements.push(
                    <img
                        src={shapeImg}
                        style={{
                            top: prevGap,
                            left: `${(randInt(window.innerWidth - 30) / window.innerWidth) * 100}% `,
                            animationDelay: `${randInt(5000)}ms`,
                        }}
                        className="shape-sprinkles"
                        key={i}
                    />
                );
                prevGap = prevGap + randInt(20, 150);
            }
            setShapes(shapeElements);
        });
    }, [shapesImg]);
    return shapes;
}

export function useRoommateSelect(
    name: string,
    options: { value: string | boolean; userString: string }[],
    label: string = name,
    detailContext: React.Context<any> = roommateDetailsContext,
    errorContext: React.Context<any> = roommateErrorDetailsContext,
    detailKey: keyof RoommateDetails | keyof FriendDetails = name as keyof RoommateDetails,
    errorKey: keyof RoommateErrorDetails | keyof FriendErrorDetails = name as keyof RoommateErrorDetails
) {
    const { details, setDetails } = React.useContext(detailContext);
    const { errors, setErrors } = React.useContext(errorContext);
    return (
        <div
            className="input-wrapper select slide-in-rest"
            {...(errors[errorKey].error ? { "data-error-message": `${errors[errorKey].message}` } : null)}
        >
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                onChange={(e) => {
                    setDetails((prev: any) => {
                        const el = e.target as HTMLSelectElement;
                        if (typeof options[0].value === "boolean")
                            return { ...prev, [el.name]: el.value ? JSON.parse(el.value) : "" };
                        return { ...prev, [el.name]: el.value };
                    });
                    validateSelect(e, setErrors);
                }}
                value={details[detailKey] as string}
            >
                <option value="">Choose from the provided options</option>
                {options.map((option, i) => (
                    <option key={i} value={option.value as string}>
                        {option.userString}
                    </option>
                ))}
            </select>
        </div>
    );
}

export function useSelect(name: string, options: { value: string; userString: string }[]) {
    const [state, setState] = useState("");
    return [
        state,
        <div className="input-wrapper select slide-in-rest">
            <label htmlFor={name}>{name}</label>
            <select
                name={name}
                id={name}
                value={state}
                onChange={(e) => {
                    setState(e.target.value);
                    validateSelect(e);
                }}
            >
                <option value="">Choose from the provided options</option>
                {options.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.userString}
                    </option>
                ))}
            </select>
        </div>,
    ];
}

export function useFriendSelect(
    name: string,
    options: { value: string; userString: string }[],
    label: string = name
) {
    return useRoommateSelect(
        name,
        options,
        label,
        friendDetailsContext,
        friendErrorDetailsContext,
        name as keyof FriendDetails,
        name as keyof FriendErrorDetails
    );
}

export function useStateLocal(key: string, defaultValue: any = null) {
    let localVal = localStorage.getItem(key);
    if (localVal) localVal = JSON.parse(localVal);
    if (localVal !== null) defaultValue = localVal;

    if (typeof defaultValue === "function") {
        defaultValue = defaultValue();
    }

    const [state, setState] = useState(defaultValue);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}

export function useLoadingAnimation() {
    const navigation = useNavigation();
    useEffect(() => {
        if (navigation.state === "loading") {
            document.querySelector(".App")?.children[0].classList.add("loading");
        } else {
            document.querySelector(".App")?.children[0].classList.remove("loading");
        }
    }, [navigation.state]);
}

export function animateLoading(show: boolean) {
    if (show) {
        document.querySelector(".App")?.children[0].classList.add("loading");
    } else {
        document.querySelector(".App")?.children[0].classList.remove("loading");
    }
}

export function useTopTracker(trackerRef: React.RefObject<HTMLDivElement>) {
    React.useEffect(() => {
        if (!trackerRef.current) return;
        const headerEl = document.querySelector(".header");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        headerEl?.classList.add("page-top");
                    } else {
                        headerEl?.classList.remove("page-top");
                    }
                });
            },
            { threshold: 1 }
        );
        observer.observe(trackerRef.current);
        return () => {
            headerEl?.classList.remove("page-top");
            if (trackerRef.current) observer.unobserve(trackerRef.current);
        };
    }, [trackerRef]);
}

export const AlertMessage = (() => {
    let timeout: any = null;
    return (message: string) => {
        if (timeout) clearTimeout(timeout);
        const alertEl = document.querySelector(".alert");
        const messageEl = alertEl?.querySelector(".message");

        if (!alertEl || !messageEl || !message) return;
        messageEl.innerHTML = message;
        alertEl?.classList.add("show");
        timeout = setTimeout(() => alertEl?.classList.remove("show"), message.split(" ").length * 250 + 2000);
    };
})();

export function useGoogleSignIn(signin: any) {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const data = await exchange_token(tokenResponse.access_token, socialBackends.google);
            signin(data);
        },
        onError: (errorResponse) => AlertMessage(errorResponse.error_description as string),
        onNonOAuthError: (err: any) => AlertMessage(err.message),
    });
    return login;
}

export function useFetchProtectedData(url: string, dependencies: any[] = []) {
    const [data, setData] = useState<any>();
    const signin = useSignInUser();
    const signout = useSignOutUser();

    useEffect(() => {
        Axios.get(url)
            .then(({ data }) => {
                setData(data);
            })
            .catch((err) => {
                switch (err.response.status) {
                    case 401:
                        handle401Unauthorized(err, signin, signout, setData);
                        break;
                    default:
                    // implement later
                }
            });
    }, dependencies);
    return { data, setData };
}

export function useFetchUnprotectedData(url: string) {
    const [data, setData] = useState([]);
    useEffect(() => {
        AxiosUnprotected.get(url)
            .then(({ data }) => {
                setData(data);
            })
            .catch(() => {});
    }, []);
    return data;
}

export function useUrlMessage() {
    React.useEffect(() => {
        const message = getUrlParams(window.location.search).message;
        if (message) AlertMessage(message);
    }, []);
}

export function useNavigateIfAuthenticated() {
    const { user } = React.useContext(userContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (user) {
            const route = getUrlParams(window.location.search).next;
            navigate(route ? route : routes.index, { replace: true });
        }
    }, [user]);
}

export function useStateSchools() {
    const schools = useContext(schoolContext);
    const states = useMemo(() => Array.from(new Set(schools.map((school) => school.state))), [schools]);
    return { states, schools };
}

export function useInfiniteScroll(route: string) {
    const [page, setPage] = useState(1);
    const [resultList, setResultList] = useState<any[]>([]);
    const [noMoreResults, setNoMoreResults] = useState(false);
    // fetch data from the server when the page number changes
    const { data } = useFetchProtectedData(`${route}?page=${page}`, [page]);

    // update the resultList when new data is gotten from the server
    useEffect(() => {
        if (data?.results) {
            setResultList((prev) => [...prev, ...data.results]);
        }
    }, [data]);

    const observer = useRef<IntersectionObserver>();
    // when the last element in the list is mounted observe the element
    // when the element is visible fetch more data from the server (by changing the page number) if available
    const lastElementRef = useCallback(
        (lastRoommateEl: HTMLElement) => {
            if (!lastRoommateEl) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                        if (data.next) {
                            setPage((prev) => prev + 1);
                        } else {
                            setNoMoreResults(true);
                        }
                    }
                });
            });
            observer.current.observe(lastRoommateEl);
        },
        [resultList]
    );
    return { resultList, noMoreResults, lastElementRef };
}

export function useImageLazyLoad(deps: any[] = [], options?: IntersectionObserverInit) {
    const observer = React.useRef(
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // load both blurhash and original images
                    const blurhash = entry.target.getAttribute("data-blurhash");
                    const originalImageUrl = entry.target.getAttribute("data-original-image");
                    const imageElement = entry.target as HTMLImageElement;
                    if (originalImageUrl) {
                        const originalImage = new Image();
                        originalImage.src = originalImageUrl;
                        originalImage.addEventListener("load", () => {
                            imageElement.src = originalImageUrl;
                        });
                    }
                    if (blurhash) {
                        const size = 200;
                        const pixels = decode(blurhash, size, size);
                        const imageData = new ImageData(pixels, size, size);
                        imageElement.src = extractUrlFromImgData(imageData);
                    }
                    observer.current.unobserve(entry.target);
                }
            });
        }, options)
    );
    React.useEffect(() => {
        // run after the browser repaints
        requestAnimationFrame(() => {
            setTimeout(() => {
                [...document.querySelectorAll(".lazy-load-image")].forEach((element) => {
                    observer.current.observe(element);
                });
            }, 0);
        });
        return () => observer.current.disconnect();
    }, deps);
}

function animateCount(element: HTMLElement, start: number, stop: number, suffix: string) {
    let current: number = start;
    const step = Math.ceil(stop / 15);
    if (current < stop) {
        element.innerHTML = `${current + step}${suffix}`;
        setTimeout(() => animateCount(element, current + step, stop, suffix), 30);
    } else if (current !== stop) {
        element.innerHTML = `${stop}${suffix}`;
    }
}
