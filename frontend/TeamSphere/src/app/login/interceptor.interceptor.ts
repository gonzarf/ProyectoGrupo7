//@Injectable()
//export class AuthInterceptor implements HttpInterceptor {
//
//    intercept(req: HttpRequest<any>, next: HttpHandler) {
//        const token = localStorage.getItem('access_token')
//        console.log(token)
//     
//        if (token) {
//          const cloned = req.clone({
//            headers: req.headers.set('Authorization', `Bearer ${token}`),
//          })
//     
//          return next.handle(cloned)
//        } else {
//          return next.handle(req)
//        }
//      }
//}

import { HttpInterceptorFn } from '@angular/common/http';

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  if (typeof window !== 'undefined') { 
    const authToken = localStorage.getItem('access_token');
    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next(authReq);
    }
  }
  return next(req);
};
