import { Injectable, PLATFORM_ID, Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpService } from './http.service';
import { FirebaseService } from './firebase.service';
import { AppStateService } from '../../store/app-state.service';

@Injectable(
    { providedIn: "root" }
)
export class HelperService {

    constructor(
        private httpService: HttpService,
        private firebaseService: FirebaseService,
        private appStateService: AppStateService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    copyPreTagContent(blog) {
        this.postVisitorsInfo(
            {
                blogName: blog && blog.blogName,
                blogHref: blog && blog.blogHref
            }
        );

        setTimeout(() => {
            if(isPlatformBrowser(this.platformId)) {
                const pre = document.getElementsByTagName("pre");
                for (var i = 0; i < pre.length; i++) {
                    const button = document.createElement("button");
                    button.className = "copy-button btn btn-outline-success btn-sm";
                    button.textContent = "Copy";
                    const s = pre[i].innerText;
                    pre[i].className = "rel-pos border border-primary p-3 prettyprint";
                    button.setAttribute("data-text", s);
                    pre[i].appendChild(button);
                    pre[i].style.padding = "10px";
                    pre[i].style.margin = "10px";
                    pre[i].style.fontSize = "13px";
                    pre[i].style.overflow = "hidden";
                    pre[i].style.whiteSpace = "pre-wrap";
                    pre[i].style.whiteSpace = "-moz-pre-wrap";
                    pre[i].style.whiteSpace = "-pre-wrap";
                    pre[i].style.whiteSpace = "-o-pre-wrap";
                    pre[i].style.wordWrap = "break-word";
                    button.onclick = function (e: any) {
                        const copyText = e.target.getAttribute("data-text");
                        const textArea = document.createElement("textarea");
                        textArea.textContent = copyText;
                        document.body.append(textArea);
                        textArea.select();
                        document.execCommand("copy");
                        e.target.textContent = "Copied";
                        textArea.className = "textAreaforStoreCopyText";
                    };
                    button.onmouseleave = (e: any) => {
                        setTimeout(() => {
                            e.target.textContent = "Copy";
                        }, 3000);
                    };
                    this.runCodePrettify();
                    button.style.color = "";
                }

                let modal = document.getElementById("w2p-modal");
                let btn = document.getElementById("w2p-Btn");
                let span = document.getElementById("w2p-close");
                if (btn) {
                    btn.onclick = function () {
                        if (modal) {
                            modal.style.display = "block";
                            modal.style.zIndex = "1144";
                        }
                    };
                }
                if (span) {
                    span.onclick = function () {
                        if (modal) {
                            modal.style.display = "none";
                        }
                    };
                    if (span) {
                        span.style.cursor = "pointer";
                        span.style.cssFloat = "right";
                        span.style.padding = "10px";
                        span.className = "btn btn-primary";
                    }
                }
                if (modal) {
                    window.onclick = function (event) {
                        if (event.target === modal) {
                            if (modal) {
                                modal.style.display = "none";
                            }
                        }
                    };
                }
            }
        }, 300)
    }

    async runCodePrettify() {
        // google code Prettify
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "/assets/js/run_prettify.js";
        await (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
    };

    postVisitorsInfo(blog) {
        const data = this.appStateService.getState().admin;
        if (data && !data.isAdminLogin) {
            this.httpService.getClientIP()
                .subscribe(res => this.firebaseService.postVisitorsInfo({ res, blog }))
        }
    }

    setCookie(cname, cvalue, exdays) {
        if(isPlatformBrowser(this.platformId)) {
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
        }
    }

    getCookie(cname) {
        if(isPlatformBrowser(this.platformId)) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    }

    deleteCookie(cname) {
        if(isPlatformBrowser(this.platformId))
            document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    
}