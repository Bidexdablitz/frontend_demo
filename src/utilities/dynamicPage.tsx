import { Suspense } from "react";
import PageLoading from "components/page_loading/pageLoading";
import Footer from "components/footer/Footer";

export default function DynamicPage(Component: any, showFooter = true, fullscreen = true) {
    return (
        <Suspense fallback={<PageLoading fullscreen={fullscreen} />}>
            <Component />
            {showFooter && <Footer />}
        </Suspense>
    );
}
