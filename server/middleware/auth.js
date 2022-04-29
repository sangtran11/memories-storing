import jwt from "jsonwebtoken"

// send requests => middleware(NEXT) allow/deny => controllers ...
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isAuthCustom = token.length < 500;
    let decodedData;
    if (token && isAuthCustom) {
      decodedData = jwt.verify(token, "scKeyMemoriesApp");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      // sub means google name that for specific userId
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) { 
    console.log(error);
  }
}

export default auth;