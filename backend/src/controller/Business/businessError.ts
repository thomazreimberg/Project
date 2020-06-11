class BusinessError extends Error {
    constructor(msg:string) {
      super(msg);
   }
}

export default BusinessError;