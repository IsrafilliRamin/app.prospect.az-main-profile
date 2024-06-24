import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const LocalPhone = () => {
    return (
        <LocalPhoneIcon className="!size-8" />
    )
}
export const Notifications  = ({handleClick}) => {
    return (
        <NotificationsIcon  onClick={handleClick} className="!size-8" />
    )
}
export const SettingsSuggest = () => {
    return (
        <SettingsSuggestIcon className="!size-8" />
    )
}
export const DashboardCustomize = () => {
    return (
        <DashboardCustomizeIcon className="!size-8" />
    )
}
export const AccountCircle = () => {
    return (
        <AccountCircleIcon className="!size-8" />
    )
}