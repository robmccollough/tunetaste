// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getAuthURL} from '../../lib/auth';


export default (req, res) => {
  
  let url = getAuthURL(req.body.stateCode)
  
  res.status(200).send({url : url})

}
