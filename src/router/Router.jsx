
import AboutTheCompany from "../components/spesific/AboutTheCompany";
import Applications from "../components/spesific/Applications";
import AuditLog from "../components/spesific/AuditLog";
import DeletionofTransactions from "../components/spesific/DeletionofTransactions";
import HomeLayout from "../components/spesific/HomeLayout";
import MainLayout from "../components/spesific/MainLayout";
import Props from "../components/spesific/Props";
import Security from "../components/spesific/Security";
import UserInfo from "../components/spesific/UserInfo";
import VATregulations from "../components/spesific/VATregulations";
import Brand from "../pages/Brand";
import Connections from "../pages/Connections";
import ContactsNew from "../pages/ContactsNew";
import ControlPanel from "../pages/ControlPanel";
import Finance from "../pages/Finance";
import Home from "../pages/Home";
import Partners from "../pages/Partners";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import SingleOperationPanel from "../pages/SingleOperationPanel";
import Trade from "../pages/Trade";
import User from "../pages/User";
import Users from "../pages/Users";
import Warehouse from "../pages/Warehouse";






export const ROUTER = [
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<HomeLayout/>,
                children:[
                   
                    {
                        path:"/userinfo",
                        element:<UserInfo/>
                    },
                    {
                        path:"/security",
                        element:<Security/>
                    },
                    {
                        path:"/aboutcompany",
                        element:<AboutTheCompany/>
                    },
                    {
                        path:"/props",
                        element:<Props/>
                    },
                    {
                        path:"/auditlog",
                        element:<AuditLog/>
                    },
                    {
                        path:"/applications",
                        element:<Applications/>
                    },
                    {
                        path:"/deletionoftransactions",
                        element:<DeletionofTransactions/>
                    },
                    {
                        path:"/vatrequlations",
                        element:<VATregulations/>
                    }
                ]
            },
            {
                path:"connection",
                element:<Connections/>,
            },
            {
                path:"controlpanel",
                element:<ControlPanel/>
            },
            {
                path:"finance",
                element:<Finance/>
            },
            {
                path:"reports",
                element:<Reports/>
            },
            {
                path:"settings",
                element:<Settings/>
            },
            {
                path:"trade",
                element:<Trade/>
            },
            {
                path:"User",
                element:<User/>
            },
            {
                path:"Users",
                element:<Users/>
            },
            {
                path:"warehouse",
                element:<Warehouse/>
            },
            {
                path:"singleoperationpanel",
                element:<SingleOperationPanel/>
            },
            {
                path:"brand",
                element:<Brand/>
            },
            {
                path:"partners",
                element:<Partners/>
            },
            {
                path:"newconnection",
                element:<ContactsNew/>
            }
        ]
    }
]