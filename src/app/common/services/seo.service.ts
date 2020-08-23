import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: "root"
})
export class SeoService {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  setTitle(blogName) {
    this.titleService.setTitle(blogName);
  }

  removeMetaTags() {
    this.meta.removeTag("name='keywords'");
    this.meta.removeTag("name='description'");
    this.meta.removeTag("name='og:description'");
  }

  setMetaTags(keywords, description) {
    this.meta.addTags([
      {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      },
      {
        name: "description",
        content: description
      },
      {
        name: "keywords",
        content: keywords
      },
      {
        name: "robots",
        content: "index, follow"
      },
      {
        name: "googlebot",
        content: "index, follow"
      },
      {
        name: "og:description",
        content: keywords
      },
      {
        name: "og:url",
        content: "https://www.way2programming.com"
      },
      {
        name: "google-site-verification",
        content: "AIzaSyB5Zupfv1GbvriEdE-bCFk-EhBNty4hc_Y"
      }
    ]);
  }
}