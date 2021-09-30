import React from "react";

const GoogleMaps = React.lazy(() => import("pages/GoogleMaps"));
const ButtonLoadingSpinner = React.lazy(() =>
  import("pages/ButtonLoadingSpinner")
);
const OTPBox = React.lazy(() => import("pages/OTPBox"));
const ContactList = React.lazy(() => import("pages/ContactList"));
const ReactBasics = React.lazy(() => import("pages/ReactBasics"));
const AppsLibrary = React.lazy(() => import("pages/AppsLibrary"));
const VideoPlayers = React.lazy(() => import("pages/VideoPlayers"));
const DataTable = React.lazy(() => import("pages/DataTable"));
const Signup = React.lazy(() => import("pages/Signup"));
const HooksDemo = React.lazy(() => import("pages/HooksDemo"));
const FileUpload = React.lazy(() => import("pages/FileUpload"));
const BatteryStatus = React.lazy(() => import("pages/BatteryStatus"));
const InfiniteScrolling = React.lazy(() => import("pages/InfiniteScrolling"));
const Hcaptcha = React.lazy(() => import("pages/HCaptcha"));
const ReCaptcha = React.lazy(() => import("pages/ReCaptcha"));
const CountrySearch = React.lazy(() => import("pages/CountrySearch"));
const DataTable2 = React.lazy(() => import("pages/DataTable2"));
const BuiltWithReact = React.lazy(() => import("pages/BuiltWithReact"));
const GeoLocation = React.lazy(() => import("pages/GeoLocation"));
const SearchFilter = React.lazy(() => import("pages/SearchFilter"));
const AccordionDemo = React.lazy(() => import("pages/AccordionDemo"));
const Leaflet = React.lazy(() => import("pages/Leaflet"));
const ImageZoom = React.lazy(() => import("pages/ImageZoom"));
const FileDownloader = React.lazy(() => import("pages/FileDownloader"));
const TreeList = React.lazy(() => import("pages/TreeList"));
const Rating = React.lazy(() => import("pages/Rating"));
const SimpleTabs = React.lazy(() => import("pages/SimpleTabs"));
const TeamSelection = React.lazy(() => import("pages/TeamSelection"));
const SearchFilterDebounced = React.lazy(() =>
  import("pages/SearchFilterDebounced")
);
const CancelableFetchRequest = React.lazy(() =>
  import("pages/CancelableFetchRequest")
);
const UserListTable = React.lazy(() => import("pages/UserListTable"));

const routes = [
  {
    enabled: true,
    path: "/map",
    component: GoogleMaps,
    navbar: "google-map-react",
    child: [
      {
        name: "Basic Google Maps",
        path: "/map",
      },
      {
        name: "Custom Google Maps",
        path: "/map/custom-style",
      },
    ],
  },
  {
    enabled: true,
    path: "/button-loader",
    component: ButtonLoadingSpinner,
    navbar: "Loading Spinners",
    child: null,
  },
  {
    enabled: true,
    path: "/otp-box",
    component: OTPBox,
    navbar: "OTP Box",
    child: null,
  },
  {
    enabled: true,
    path: "/contact-list",
    component: ContactList,
    navbar: "Contact List App",
    child: null,
  },
  {
    enabled: true,
    path: "/video-players",
    component: VideoPlayers,
    navbar: "Video Players",
    child: null,
  },
  {
    enabled: true,
    path: "/apps-library/scroll-indicator",
    component: AppsLibrary,
    navbar: "Scroll Indicator",
    child: null,
  },
  {
    enabled: true,
    path: "/signup",
    component: Signup,
    navbar: "Signup Form",
    child: null,
  },
  {
    enabled: true,
    path: "/hooks-demo",
    component: HooksDemo,
    navbar: "Custom Hooks demo",
    child: null,
  },
  {
    enabled: true,
    path: "/data-table",
    component: DataTable,
    navbar: "Data Table",
    child: null,
  },
  {
    enabled: true,
    path: "/file-upload",
    component: FileUpload,
    navbar: "File Upload",
    child: null,
  },
  {
    enabled: true,
    path: "/battery-status",
    component: BatteryStatus,
    navbar: "Battery Status",
    child: null,
  },
  {
    enabled: true,
    path: "/infinite-scrolling",
    component: InfiniteScrolling,
    navbar: "Infinite Scrolling",
    child: null,
  },
  {
    enabled: true,
    path: "/auto-complete",
    component: CountrySearch,
    navbar: "Auto Complete",
    child: null,
  },
  {
    enabled: true,
    path: "/hcaptcha",
    component: Hcaptcha,
    navbar: "HCaptcha",
    child: null,
  },
  {
    enabled: true,
    path: "/recaptcha",
    component: ReCaptcha,
    navbar: "ReCaptcha",
    child: null,
  },
  {
    enabled: true,
    path: "/data-table-large",
    component: DataTable2,
    navbar: "",
    child: null,
  },
  {
    enabled: true,
    path: "/find-my-ip",
    component: GeoLocation,
    navbar: "Find My IP",
    child: null,
  },
  {
    enabled: true,
    path: "/built-with-react",
    component: BuiltWithReact,
    navbar: "",
    child: null,
  },
  {
    enabled: true,
    path: "/search-filter",
    component: SearchFilter,
    navbar: "Search Filter",
    child: null,
  },
  {
    enabled: true,
    path: "/accordion",
    component: AccordionDemo,
    navbar: "Accordion",
    child: null,
  },
  {
    enabled: true,
    path: "/image-zoom",
    component: ImageZoom,
    navbar: "Image Zoom",
    child: null,
  },
  {
    enabled: true,
    path: "/file-downloader",
    component: FileDownloader,
    navbar: "File Downloader",
    child: null,
  },
  {
    enabled: true,
    path: "/tree-structure",
    component: TreeList,
    navbar: "Tree List",
    child: null,
  },
  {
    enabled: true,
    path: "/team-selection",
    component: TeamSelection,
    navbar: "Tree Selection (DND)",
    child: null,
  },
  {
    enabled: true,
    path: "/leaflet",
    component: Leaflet,
    navbar: "React Leaflet",
    child: [
      {
        name: "Basic Map",
        path: "/leaflet/basic",
      },
      {
        name: "Markers",
        path: "/leaflet/markers",
      },
      {
        name: "Get User Location",
        path: "/leaflet/user-location",
      },
      {
        name: "Draw Shapes",
        path: "/leaflet/draw-on-map",
      },
      {
        name: "Draw Polygon",
        path: "/leaflet/polygon",
      },
      {
        name: "Static Map",
        path: "/leaflet/static-map",
      },
      {
        name: "Print",
        path: "/leaflet/print-map",
      },
    ],
  },
  {
    enabled: true,
    path: "/rating",
    component: Rating,
    navbar: "Rating",
    child: null,
  },
  {
    enabled: true,
    path: "/simple-tabs",
    component: SimpleTabs,
    navbar: "Simple Tabs",
    child: null,
  },
  {
    enabled: true,
    path: "/search-debounced",
    component: SearchFilterDebounced,
    navbar: "Debounced Search",
    child: null,
  },
  {
    enabled: true,
    path: "/cancelable-fetch-request",
    component: CancelableFetchRequest,
    navbar: "Cancelable Fetch Request",
    child: null,
  },
  {
    enabled: true,
    path: "/user-list-table",
    component: UserListTable,
    navbar: "User List Table",
    child: null,
  },
  {
    enabled: true,
    path: "/react-basics",
    component: ReactBasics,
    navbar: "React Basic",
    child: [
      {
        name: "Show and Hide based on State",
        path: "/react-basics/show-hide-elements",
      },
    ],
  },
];

export default routes.filter((route) => route.enabled);
