import registerUser from "./user/registerUser";
import createPlayer from "./player/createPlayer";
import updatePlayer from "./player/updatePlayer";
import getPlayer from "./player/getPlayer";
import deletePlayer from "./player/deletePlayer";
import playerList from "./player/getPlayerList";
import createNews from "./new/createNews";
import newsList from "./new/getNewsList"
import createContact from "./contact/createContact";
import getContact from "./contact/getContact";
import getFilesDetails from "./player/getFilesDetails";
import createLog from "./log/createLog";
import getLogsList from "./log/getLogList";
import createJobs from "./job/createJobs";
import jobsList from "./job/getJobsList"

export default {
    registerUser,
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer,
    playerList,
    createNews,
    newsList,
    createContact,
    getContact,
    getFilesDetails,
    createLog,
    getLogsList,
    createJobs,
    jobsList,
}