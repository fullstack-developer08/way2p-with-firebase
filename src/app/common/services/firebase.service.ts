import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentChangeAction, Query, DocumentData } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(private firestore: AngularFirestore) { }

    addBlog(formValues: any) {
      return this.firestore.collection("blogs").add(formValues);
    }

    getBlogs(): Observable<DocumentChangeAction<any>[]> {
      return this.firestore.collection("blogs").snapshotChanges();
    }

    getBlogsUsingTechName(techName: string): any {
      return this.firestore.collection("blogs", ref =>
        ref.where("blogTech", "==", techName)
      );
    }

    getBlogsUsingURL(URL: string): any {
      return this.firestore.collection("blogs", ref =>
        ref.where("blogHref", "==", URL)
      );
    }

    getBlogNavLinks(techName: string ) {
      return this.firestore.collection("blogs", ref =>
        ref.where("blogTech", "==", techName),
      );
    }

    editBlog(id, formValues) {
       return this.firestore.doc("blogs/" + id).update(formValues);
    }

    getBlog(id) {
      return this.firestore.doc("blogs/" + id).get();
    }

    deleteBlog(id) {
      return this.firestore.doc("blogs/" + id).delete();
    }

    getAdminUser(user) {
      return this.firestore.collection("user", ref =>
        ref.where("userId", "==", user)
      );
    }

    searchBlogs(text) {
      // return this.firestore.collection("blogs", ref =>
      //   ref
      //   .where('blogTech', '>=', text)
      //   .where('blogTech', '<=', text)
      // );
    }

    postVisitorsInfo(obj) {
      obj.date = new Date();
      return this.firestore.collection("visitorsInfo").add(obj);
    }

    getVisitorsInfo(): Observable<DocumentChangeAction<any>[]> {
      return this.firestore.collection("visitorsInfo").snapshotChanges();
    }

    getCountryVisitorsInfo(countryName){
      return this.firestore.collection("visitorsInfo", ref =>
        ref.where("res.country_name", "==", countryName),
      );
    }

    setFacebookVisitors(obj) {
      return this.firestore.collection("facebookVisitorsInfo").add(obj);
    }

    getFacebookVisitors(): Observable<DocumentChangeAction<any>[]> {
      return this.firestore.collection("facebookVisitorsInfo").snapshotChanges();
    }

    getCityVisitorsInfo(countryName, city){
      return this.firestore.collection("visitorsInfo", ref =>
        ref.where("res.country_name", "==", countryName)
        .where("res.city", "==", city)
      );
    }

    deleteVisitorInfo(id) {
      return this.firestore.doc("visitorsInfo/" + id).delete();
    }

    getArticleByType(type) {
      return this.firestore.collection("blogs", ref =>
        ref.where("articleType", "==", type)
      ); 
    }

}