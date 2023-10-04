import tareas from '../../../data/post.json';
import { H3Event } from 'h3';
import { Http_Codes, Server_Error_Message } from '../../utils/constants';



export default eventHandler(
    async (event: H3Event): Promise<{    
        data?: object | null;
        count?: number;}> => {
      try {    
        setResponseStatus(event, Http_Codes.succuss);
        return { data: tareas, count: tareas.length };
        
      } catch (err: any) {
        return createError({ 
          statusCode: err.statusCode || Http_Codes.serverError,
          statusMessage: err.statusMessage || Server_Error_Message
        });
      }
    }
  );