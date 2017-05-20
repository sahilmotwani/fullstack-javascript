import axios from 'axios';
import config from './config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

const getApiUrl = contestId => {
    if(contestId){
    return  `${config.serverUrl}/api/contests/${contestId}`
    }
   return `${config.serverUrl}/api/contests`
}

const getIntitialData = (contestId,apiData) => {
    if(contestId){
        return {
            currentContestId : apiData._id,
            contests : {
                [apiData._id] : apiData
            }
        };
    }
    return{
        contests : apiData.contests
    }
};

const serverRender = (contestId) =>
    axios.get(getApiUrl(contestId))
        .then(resp => {
            const initialData = getIntitialData(contestId , resp.data);
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={initialData} />
                ),
                initialData: resp.data.contests
            }
        });

export default serverRender;