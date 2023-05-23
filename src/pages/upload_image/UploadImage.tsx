import { AxiosProgressEvent, AxiosRequestConfig } from "axios";
import Axios from "axiosInstance";
import * as React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { routes } from "router";
import { useSignInUser, useSignOutUser } from "utilities/authentication";
import { userContext } from "utilities/contextDefinitions";
import { AlertMessage, useAnimateIn, useLoadingAnimation, useUrlMessage } from "utilities/customHooks";
import { handle401Unauthorized } from "utilities/errorHandlers";
import { api, errorCodes } from "utilities/globalVariables";
import { formIsValid } from "utilities/handleFormSubmit";
import { getLocalUser, getUrlParams, makeSearch } from "utilities/helperFunctions";
import { User } from "utilities/typeDefs";
import UploadProgress from "./components/upload_progress/UploadProgress";
import "./upload-image.scss";

export function loader() {
    if (!getLocalUser()) {
        const params = { next: routes.uploadImage, message: "Please login to upload an image" };
        return redirect(`${routes.signIn}/${makeSearch(params)}`);
    }
    return null;
}

function UploadImage() {
    useLoadingAnimation();
    useUrlMessage();
    const [uploading, setUploading] = React.useState(false);
    useAnimateIn(".slide-in-rest", { threshold: 0.7 }, [uploading]);
    const dropZoneRef = React.useRef(null);
    const thumbRef = React.useRef(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [progress, setProgress] = React.useState(0);
    const [files, setFiles] = React.useState<FileList>();
    const { user, setUser } = React.useContext(userContext);
    const signin = useSignInUser();
    const signout = useSignOutUser();
    const navigate = useNavigate();
    const controller = React.useRef(new AbortController());

    function uploadDone(data: any) {
        setUploading(false);
        AlertMessage("Image(s) uploaded");
        setUser((prev: any) => {
            console.log("upload", prev);
            return { ...prev, pictures: [...prev?.pictures, ...data] };
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData();
        controller.current = new AbortController();
        const config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            signal: controller.current.signal,
            onUploadProgress: function (progressEvent: AxiosProgressEvent) {
                if (!progressEvent.progress) return;
                setProgress(Math.floor(progressEvent.progress * 100));
            },
        };
        if (files) {
            for (const file of files) {
                formData.append("image[]", file);
            }
            setUploading(true);
            Axios.post(api.uploadImage, formData, config)
                .then(({ data }) => uploadDone(data))
                .catch((err) => {
                    setUploading(false);
                    console.log(err);
                    // if the upload was canceled
                    if (err.code === errorCodes.requestCanceled) {
                        AlertMessage("Upload canceled");
                        return;
                    }
                    switch (err.response.status) {
                        case 401:
                            handle401Unauthorized(
                                err,
                                signin,
                                signout,
                                uploadDone,
                                undefined,
                                () => setUploading(true),
                                () => setUploading(false)
                            );
                            break;
                        default:
                        // implement later
                    }
                });
        } else {
            AlertMessage("Please upload atleast one image to proceed");
        }
    }

    function fileDropped(e: React.DragEvent) {
        e.preventDefault();
        if (!dropZoneRef.current) return;
        const el = dropZoneRef.current as HTMLDivElement;
        const files = e.dataTransfer.files;
        if (files.length) {
            if (!filesValid(files)) {
                alert("Please insert only image files");
                return;
            }
            setFiles(files);
            updateThumb(files[0]);
        }
    }
    function dragEnter() {
        if (!dropZoneRef.current) return;
        const el = dropZoneRef.current as HTMLDivElement;
        el.classList.add("drag-over");
    }
    function dragLeave() {
        if (!dropZoneRef.current) return;
        const el = dropZoneRef.current as HTMLDivElement;
        el.classList.remove("drag-over");
    }
    function fileChanged(e: React.ChangeEvent) {
        const input = e.target as HTMLInputElement;
        if (input.files?.length) {
            if (!filesValid(input.files)) return;

            updateThumb(input.files[0]);
            setFiles(input.files);
        }
    }
    function updateThumb(file: File) {
        if (!thumbRef.current) return;
        if (!dropZoneRef.current) return;
        const dropZone = dropZoneRef.current as HTMLDivElement;
        const thumbEl = thumbRef.current as HTMLDivElement;
        thumbEl.setAttribute("data-image-name", file.name);

        const img = new Image();
        const objUrl = URL.createObjectURL(file);
        img.src = objUrl;
        thumbEl.style.backgroundImage = `url(${img.src})`;
        img.addEventListener("load", () => {
            URL.revokeObjectURL(objUrl);
        });
        dropZone.classList.add("dropped");
    }
    return (
        <form onSubmit={handleSubmit} className="upload-image">
            <section>
                <h2 className="heading slide-in-rest">upload your image</h2>
                <p className="sub-heading slide-in-rest">
                    Ensure it a very bright picture of your head and half body
                </p>
            </section>

            <label
                htmlFor="images"
                tabIndex={0}
                ref={dropZoneRef}
                className="drop-zone slide-in-rest"
                onDragOver={(e) => e.preventDefault()}
                onDrop={fileDropped}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
            >
                <div className="thumb" data-image-name="img.jpg" ref={thumbRef}></div>
                <div className="placeholder mobile">
                    <div className="img"></div>
                    <p>
                        Take new photo or choose from <span>gallery</span>
                    </p>
                    <p>Supports JPG, JPEG2000, PNG</p>
                </div>
                <div className="placeholder desktop">
                    <div className="img"></div>
                    <p>
                        Drop your image here, or <span>browse</span>
                    </p>
                    <p>Supports JPG, JPEG2000, PNG</p>
                </div>
                <input
                    type="file"
                    name="image[]"
                    id="images"
                    ref={fileInputRef}
                    multiple={true}
                    onChange={fileChanged}
                />
            </label>

            <UploadProgress {...{ files, progress, uploading, controller }} />

            <div className="button-wrapper slide-in-rest">
                <button type="submit">upload</button>
                {user?.pictures?.length ? (
                    <button
                        type="button"
                        className="continue"
                        onClick={() => {
                            if (user?.pictures?.length) {
                                const route = getUrlParams(window.location.search).next;
                                navigate(route ? route : routes.index);
                            }
                        }}
                    >
                        continue
                    </button>
                ) : null}
            </div>
        </form>
    );
}

function filesValid(files: File[] | FileList | null) {
    if (files === null || !files.length) return false;
    files = Array.from(files);
    let isValid = true;

    files.forEach((file) => {
        if (!file.type.startsWith("image/")) isValid = false;
    });
    return isValid;
}

export default UploadImage;
