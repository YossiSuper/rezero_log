import exp from 'constants'
import config from '../next.config'

export default function(url:string) {
    return config.basePath + "/"+ url
}



