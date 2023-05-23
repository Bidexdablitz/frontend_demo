import { createHashRouter } from "react-router-dom";
import dynamicPage from "utilities/dynamicPage";
import Layout from "components/layout/Layout";
import googleWrapper from "utilities/googleWrapper";
import { lazy } from "react";
import { loader as HomeLoader } from "pages/home/Home";
import { loader as ResetPasswordLoader } from "pages/forgot_password/components/reset_password/ResetPassword";
import { loader as RoommateLoader } from "pages/roommate/Roommate";
import { loader as SignInLoader } from "pages/sign_in/SignIn";
import { loader as SignUpLoader } from "pages/sign_up/SignUp";
import { loader as RoommateOnboardingLoader } from "pages/roommate_onboarding/RoommateOnboarding";
import { loader as UploadImageLoader } from "pages/upload_image/UploadImage";
import { loader as RoommateDetailLoader } from "pages/roommate_detail/RoommateDetail";

const ErrorPage404 = lazy(() => import("pages/404/404"));
const Home = lazy(() => import("pages/home/Home"));
const AboutUs = lazy(() => import("pages/about_us/AboutUs"));
const ContactUs = lazy(() => import("pages/contact_us/ContactUs"));
const SignIn = lazy(() => import("pages/sign_in/SignIn"));
const SignUp = lazy(() => import("pages/sign_up/SignUp"));
const GuidesToUse = lazy(() => import("pages/guides_to_use/GuidesToUse"));
const RoommateOnboarding = lazy(() => import("pages/roommate_onboarding/RoommateOnboarding"));
const RoommatePageOne = lazy(() => import("pages/roommate_onboarding/components/page_one/PageOne"));
const RoommatePageTwo = lazy(() => import("pages/roommate_onboarding/components/page_two/PageTwo"));
const RoommatePageThree = lazy(() => import("pages/roommate_onboarding/components/page_three/PageThree"));
const FriendOnboarding = lazy(() => import("pages/friend_onboarding/FriendOnboarding"));
const FriendPageOne = lazy(() => import("pages/friend_onboarding/components/page_one/PageOne"));
const FriendPageTwo = lazy(() => import("pages/friend_onboarding/components/page_two/PageTwo"));
const FriendPageThree = lazy(() => import("pages/friend_onboarding/components/page_three/PageThree"));
const UploadImage = lazy(() => import("pages/upload_image/UploadImage"));
const Dashboard = lazy(() => import("pages/dashboard/Dashboard"));
const DashboardIndex = lazy(() => import("pages/dashboard/components/index/Index"));
const DashboardProfile = lazy(() => import("pages/dashboard/components/profile/Profile"));
const DashboardDownlines = lazy(() => import("pages/dashboard/components/downlines/Downlines"));
const Notifications = lazy(() => import("pages/notifications/Notifications"));
const NotificationDetail = lazy(() => import("pages/notification_detail/NotificationDetail"));
const Roommate = lazy(() => import("pages/roommate/Roommate"));
const Friend = lazy(() => import("pages/friend/Friend"));
const RoommateDetail = lazy(() => import("pages/roommate_detail/RoommateDetail"));
const ForgotPassword = lazy(() => import("pages/forgot_password/ForgotPassword"));
const ResetPassword = lazy(() => import("pages/forgot_password/components/reset_password/ResetPassword"));
const Payment = lazy(() => import("pages/payment/Payment"));

export const routes = {
    index: "/",
    about: "/about-us",
    contact: "/contact-us",
    signUp: "/sign-up",
    signIn: "/sign-in",
    dashboard: {
        index: "/dashboard",
        home: "/dashboard/home",
        profile: "/dashboard/profile",
        downlines: "/dashboard/downlines",
    },
    notifications: "/notifications",
    notificationDetial: "/notifications/:id",
    uploadImage: "/upload-image",
    guidesToUse: "/guides-on-how-to-request-a-friend-or-roommate",
    roommate: "/roommate",
    roommateDetail: "/roommate/:username",
    friend: "/friend",
    friendDetail: "/friend/:username",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    payment: "/payment",
    roommateOnboarding: {
        index: "/roommate-onboarding",
        pageTwo: "/roommate-onboarding/page-two",
        pageThree: "/roommate-onboarding/page-three",
    },
    friendOnboarding: {
        index: "/friend-onboarding",
        pageTwo: "/friend-onboarding/page-two",
        pageThree: "/friend-onboarding/page-three",
    },
};

const router = createHashRouter([
    {
        path: routes.index,
        element: <Layout />,
        children: [
            {
                children: [
                    { index: true, element: dynamicPage(Home), loader: HomeLoader },
                    { path: routes.about, element: dynamicPage(AboutUs) },
                    { path: routes.contact, element: dynamicPage(ContactUs) },
                    { path: routes.guidesToUse, element: dynamicPage(GuidesToUse) },
                    { path: routes.notifications, element: dynamicPage(Notifications, false) },
                    { path: routes.notificationDetial, element: dynamicPage(NotificationDetail, false) },
                    { path: routes.roommate, element: dynamicPage(Roommate, false), loader: RoommateLoader },
                    {
                        path: routes.roommateDetail,
                        element: dynamicPage(RoommateDetail, false),
                        loader: RoommateDetailLoader,
                    },
                    { path: routes.friend, element: dynamicPage(Friend, false) },
                ],
            },
        ],
    },
    { path: routes.signUp, element: googleWrapper(dynamicPage(SignUp, false)), loader: SignUpLoader },
    { path: routes.signIn, element: googleWrapper(dynamicPage(SignIn, false)), loader: SignInLoader },
    { path: routes.forgotPassword, element: dynamicPage(ForgotPassword, false) },
    { path: routes.resetPassword, element: dynamicPage(ResetPassword, false), loader: ResetPasswordLoader },
    { path: routes.payment, element: dynamicPage(Payment, false) },
    {
        path: routes.dashboard.index,
        element: dynamicPage(Dashboard, false),
        children: [
            {
                children: [
                    { path: routes.dashboard.home, element: dynamicPage(DashboardIndex, false, false) },
                    { path: routes.dashboard.profile, element: dynamicPage(DashboardProfile, false, false) },
                    {
                        path: routes.dashboard.downlines,
                        element: dynamicPage(DashboardDownlines, false, false),
                    },
                ],
            },
        ],
    },
    { path: routes.uploadImage, element: dynamicPage(UploadImage, false), loader: UploadImageLoader },
    {
        path: routes.roommateOnboarding.index,
        element: dynamicPage(RoommateOnboarding, false),
        loader: RoommateOnboardingLoader,
        children: [
            { index: true, element: dynamicPage(RoommatePageOne, false, false) },
            { path: routes.roommateOnboarding.pageTwo, element: dynamicPage(RoommatePageTwo, false, false) },
            {
                path: routes.roommateOnboarding.pageThree,
                element: dynamicPage(RoommatePageThree, false, false),
            },
        ],
    },
    {
        path: routes.friendOnboarding.index,
        element: dynamicPage(FriendOnboarding, false),
        children: [
            { index: true, element: dynamicPage(FriendPageOne, false, false) },
            { path: routes.friendOnboarding.pageTwo, element: dynamicPage(FriendPageTwo, false, false) },
            { path: routes.friendOnboarding.pageThree, element: dynamicPage(FriendPageThree, false, false) },
        ],
    },
    { path: "*", element: dynamicPage(ErrorPage404) },
]);

export default router;
