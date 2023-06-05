require('./sourcemap-register.js');(()=>{var e={351:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const i=s(r(37));const a=r(278);function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+i.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const u="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=u+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${u}${escapeData(this.message)}`;return e}}function escapeData(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};var i=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getIDToken=t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.notice=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const a=r(351);const u=r(717);const c=r(278);const l=s(r(37));const d=s(r(17));const p=r(41);var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=c.toCommandValue(t);process.env[e]=r;const n=process.env["GITHUB_ENV"]||"";if(n){const t="_GitHubActionsFileCommandDelimeter_";const n=`${e}<<${t}${l.EOL}${r}${l.EOL}${t}`;u.issueCommand("ENV",n)}else{a.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){a.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){u.issueCommand("PATH",e)}else{a.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${d.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return r}return r.trim()}t.getInput=getInput;function getMultilineInput(e,t){const r=getInput(e,t).split("\n").filter((e=>e!==""));return r}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const r=["true","True","TRUE"];const n=["false","False","FALSE"];const o=getInput(e,t);if(r.includes(o))return true;if(n.includes(o))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(l.EOL);a.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){a.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){a.issueCommand("debug",{},e)}t.debug=debug;function error(e,t={}){a.issueCommand("error",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.error=error;function warning(e,t={}){a.issueCommand("warning",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.warning=warning;function notice(e,t={}){a.issueCommand("notice",c.toCommandProperties(t),e instanceof Error?e.toString():e)}t.notice=notice;function info(e){process.stdout.write(e+l.EOL)}t.info=info;function startGroup(e){a.issue("group",e)}t.startGroup=startGroup;function endGroup(){a.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,(function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r}))}t.group=group;function saveState(e,t){a.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState;function getIDToken(e){return i(this,void 0,void 0,(function*(){return yield p.OidcClient.getIDToken(e)}))}t.getIDToken=getIDToken;var h=r(327);Object.defineProperty(t,"summary",{enumerable:true,get:function(){return h.summary}});var m=r(327);Object.defineProperty(t,"markdownSummary",{enumerable:true,get:function(){return m.markdownSummary}});var g=r(981);Object.defineProperty(t,"toPosixPath",{enumerable:true,get:function(){return g.toPosixPath}});Object.defineProperty(t,"toWin32Path",{enumerable:true,get:function(){return g.toWin32Path}});Object.defineProperty(t,"toPlatformPath",{enumerable:true,get:function(){return g.toPlatformPath}})},717:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const i=s(r(147));const a=s(r(37));const u=r(278);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!i.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}i.appendFileSync(r,`${u.toCommandValue(t)}${a.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},41:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.OidcClient=void 0;const o=r(255);const s=r(526);const i=r(186);class OidcClient{static createHttpClient(e=true,t=10){const r={allowRetries:e,maxRetries:t};return new o.HttpClient("actions/oidc-client",[new s.BearerCredentialHandler(OidcClient.getRequestToken())],r)}static getRequestToken(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable")}return e}static getIDTokenUrl(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable")}return e}static getCall(e){var t;return n(this,void 0,void 0,(function*(){const r=OidcClient.createHttpClient();const n=yield r.getJson(e).catch((e=>{throw new Error(`Failed to get ID Token. \n \n        Error Code : ${e.statusCode}\n \n        Error Message: ${e.result.message}`)}));const o=(t=n.result)===null||t===void 0?void 0:t.value;if(!o){throw new Error("Response json body do not have ID Token field")}return o}))}static getIDToken(e){return n(this,void 0,void 0,(function*(){try{let t=OidcClient.getIDTokenUrl();if(e){const r=encodeURIComponent(e);t=`${t}&audience=${r}`}i.debug(`ID token url is ${t}`);const r=yield OidcClient.getCall(t);i.setSecret(r);return r}catch(e){throw new Error(`Error message: ${e.message}`)}}))}}t.OidcClient=OidcClient},981:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.toPlatformPath=t.toWin32Path=t.toPosixPath=void 0;const i=s(r(17));function toPosixPath(e){return e.replace(/[\\]/g,"/")}t.toPosixPath=toPosixPath;function toWin32Path(e){return e.replace(/[/]/g,"\\")}t.toWin32Path=toWin32Path;function toPlatformPath(e){return e.replace(/[/\\]/g,i.sep)}t.toPlatformPath=toPlatformPath},327:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.summary=t.markdownSummary=t.SUMMARY_DOCS_URL=t.SUMMARY_ENV_VAR=void 0;const o=r(37);const s=r(147);const{access:i,appendFile:a,writeFile:u}=s.promises;t.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY";t.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";class Summary{constructor(){this._buffer=""}filePath(){return n(this,void 0,void 0,(function*(){if(this._filePath){return this._filePath}const e=process.env[t.SUMMARY_ENV_VAR];if(!e){throw new Error(`Unable to find environment variable for $${t.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`)}try{yield i(e,s.constants.R_OK|s.constants.W_OK)}catch(t){throw new Error(`Unable to access summary file: '${e}'. Check if the file has correct read/write permissions.`)}this._filePath=e;return this._filePath}))}wrap(e,t,r={}){const n=Object.entries(r).map((([e,t])=>` ${e}="${t}"`)).join("");if(!t){return`<${e}${n}>`}return`<${e}${n}>${t}</${e}>`}write(e){return n(this,void 0,void 0,(function*(){const t=!!(e===null||e===void 0?void 0:e.overwrite);const r=yield this.filePath();const n=t?u:a;yield n(r,this._buffer,{encoding:"utf8"});return this.emptyBuffer()}))}clear(){return n(this,void 0,void 0,(function*(){return this.emptyBuffer().write({overwrite:true})}))}stringify(){return this._buffer}isEmptyBuffer(){return this._buffer.length===0}emptyBuffer(){this._buffer="";return this}addRaw(e,t=false){this._buffer+=e;return t?this.addEOL():this}addEOL(){return this.addRaw(o.EOL)}addCodeBlock(e,t){const r=Object.assign({},t&&{lang:t});const n=this.wrap("pre",this.wrap("code",e),r);return this.addRaw(n).addEOL()}addList(e,t=false){const r=t?"ol":"ul";const n=e.map((e=>this.wrap("li",e))).join("");const o=this.wrap(r,n);return this.addRaw(o).addEOL()}addTable(e){const t=e.map((e=>{const t=e.map((e=>{if(typeof e==="string"){return this.wrap("td",e)}const{header:t,data:r,colspan:n,rowspan:o}=e;const s=t?"th":"td";const i=Object.assign(Object.assign({},n&&{colspan:n}),o&&{rowspan:o});return this.wrap(s,r,i)})).join("");return this.wrap("tr",t)})).join("");const r=this.wrap("table",t);return this.addRaw(r).addEOL()}addDetails(e,t){const r=this.wrap("details",this.wrap("summary",e)+t);return this.addRaw(r).addEOL()}addImage(e,t,r){const{width:n,height:o}=r||{};const s=Object.assign(Object.assign({},n&&{width:n}),o&&{height:o});const i=this.wrap("img",null,Object.assign({src:e,alt:t},s));return this.addRaw(i).addEOL()}addHeading(e,t){const r=`h${t}`;const n=["h1","h2","h3","h4","h5","h6"].includes(r)?r:"h1";const o=this.wrap(n,e);return this.addRaw(o).addEOL()}addSeparator(){const e=this.wrap("hr",null);return this.addRaw(e).addEOL()}addBreak(){const e=this.wrap("br",null);return this.addRaw(e).addEOL()}addQuote(e,t){const r=Object.assign({},t&&{cite:t});const n=this.wrap("blockquote",e,r);return this.addRaw(n).addEOL()}addLink(e,t){const r=this.wrap("a",e,{href:t});return this.addRaw(r).addEOL()}}const c=new Summary;t.markdownSummary=c;t.summary=c},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.toCommandProperties=t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue;function toCommandProperties(e){if(!Object.keys(e).length){return{}}return{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}}t.toCommandProperties=toCommandProperties},526:function(e,t){"use strict";var r=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.PersonalAccessTokenCredentialHandler=t.BearerCredentialHandler=t.BasicCredentialHandler=void 0;class BasicCredentialHandler{constructor(e,t){this.username=e;this.password=t}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return false}handleAuthentication(){return r(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.BasicCredentialHandler=BasicCredentialHandler;class BearerCredentialHandler{constructor(e){this.token=e}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Bearer ${this.token}`}canHandleAuthentication(){return false}handleAuthentication(){return r(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.BearerCredentialHandler=BearerCredentialHandler;class PersonalAccessTokenCredentialHandler{constructor(e){this.token=e}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return false}handleAuthentication(){return r(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.PersonalAccessTokenCredentialHandler=PersonalAccessTokenCredentialHandler},255:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){if(n===undefined)n=r;Object.defineProperty(e,n,{enumerable:true,get:function(){return t[r]}})}:function(e,t,r,n){if(n===undefined)n=r;e[n]=t[r]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(r!=="default"&&Object.hasOwnProperty.call(e,r))n(t,e,r);o(t,e);return t};var i=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){o(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.HttpClient=t.isHttps=t.HttpClientResponse=t.HttpClientError=t.getProxyUrl=t.MediaTypes=t.Headers=t.HttpCodes=void 0;const a=s(r(685));const u=s(r(687));const c=s(r(835));const l=s(r(294));var d;(function(e){e[e["OK"]=200]="OK";e[e["MultipleChoices"]=300]="MultipleChoices";e[e["MovedPermanently"]=301]="MovedPermanently";e[e["ResourceMoved"]=302]="ResourceMoved";e[e["SeeOther"]=303]="SeeOther";e[e["NotModified"]=304]="NotModified";e[e["UseProxy"]=305]="UseProxy";e[e["SwitchProxy"]=306]="SwitchProxy";e[e["TemporaryRedirect"]=307]="TemporaryRedirect";e[e["PermanentRedirect"]=308]="PermanentRedirect";e[e["BadRequest"]=400]="BadRequest";e[e["Unauthorized"]=401]="Unauthorized";e[e["PaymentRequired"]=402]="PaymentRequired";e[e["Forbidden"]=403]="Forbidden";e[e["NotFound"]=404]="NotFound";e[e["MethodNotAllowed"]=405]="MethodNotAllowed";e[e["NotAcceptable"]=406]="NotAcceptable";e[e["ProxyAuthenticationRequired"]=407]="ProxyAuthenticationRequired";e[e["RequestTimeout"]=408]="RequestTimeout";e[e["Conflict"]=409]="Conflict";e[e["Gone"]=410]="Gone";e[e["TooManyRequests"]=429]="TooManyRequests";e[e["InternalServerError"]=500]="InternalServerError";e[e["NotImplemented"]=501]="NotImplemented";e[e["BadGateway"]=502]="BadGateway";e[e["ServiceUnavailable"]=503]="ServiceUnavailable";e[e["GatewayTimeout"]=504]="GatewayTimeout"})(d=t.HttpCodes||(t.HttpCodes={}));var p;(function(e){e["Accept"]="accept";e["ContentType"]="content-type"})(p=t.Headers||(t.Headers={}));var f;(function(e){e["ApplicationJson"]="application/json"})(f=t.MediaTypes||(t.MediaTypes={}));function getProxyUrl(e){const t=c.getProxyUrl(new URL(e));return t?t.href:""}t.getProxyUrl=getProxyUrl;const h=[d.MovedPermanently,d.ResourceMoved,d.SeeOther,d.TemporaryRedirect,d.PermanentRedirect];const m=[d.BadGateway,d.ServiceUnavailable,d.GatewayTimeout];const g=["OPTIONS","GET","DELETE","HEAD"];const v=10;const y=5;class HttpClientError extends Error{constructor(e,t){super(e);this.name="HttpClientError";this.statusCode=t;Object.setPrototypeOf(this,HttpClientError.prototype)}}t.HttpClientError=HttpClientError;class HttpClientResponse{constructor(e){this.message=e}readBody(){return i(this,void 0,void 0,(function*(){return new Promise((e=>i(this,void 0,void 0,(function*(){let t=Buffer.alloc(0);this.message.on("data",(e=>{t=Buffer.concat([t,e])}));this.message.on("end",(()=>{e(t.toString())}))}))))}))}}t.HttpClientResponse=HttpClientResponse;function isHttps(e){const t=new URL(e);return t.protocol==="https:"}t.isHttps=isHttps;class HttpClient{constructor(e,t,r){this._ignoreSslError=false;this._allowRedirects=true;this._allowRedirectDowngrade=false;this._maxRedirects=50;this._allowRetries=false;this._maxRetries=1;this._keepAlive=false;this._disposed=false;this.userAgent=e;this.handlers=t||[];this.requestOptions=r;if(r){if(r.ignoreSslError!=null){this._ignoreSslError=r.ignoreSslError}this._socketTimeout=r.socketTimeout;if(r.allowRedirects!=null){this._allowRedirects=r.allowRedirects}if(r.allowRedirectDowngrade!=null){this._allowRedirectDowngrade=r.allowRedirectDowngrade}if(r.maxRedirects!=null){this._maxRedirects=Math.max(r.maxRedirects,0)}if(r.keepAlive!=null){this._keepAlive=r.keepAlive}if(r.allowRetries!=null){this._allowRetries=r.allowRetries}if(r.maxRetries!=null){this._maxRetries=r.maxRetries}}}options(e,t){return i(this,void 0,void 0,(function*(){return this.request("OPTIONS",e,null,t||{})}))}get(e,t){return i(this,void 0,void 0,(function*(){return this.request("GET",e,null,t||{})}))}del(e,t){return i(this,void 0,void 0,(function*(){return this.request("DELETE",e,null,t||{})}))}post(e,t,r){return i(this,void 0,void 0,(function*(){return this.request("POST",e,t,r||{})}))}patch(e,t,r){return i(this,void 0,void 0,(function*(){return this.request("PATCH",e,t,r||{})}))}put(e,t,r){return i(this,void 0,void 0,(function*(){return this.request("PUT",e,t,r||{})}))}head(e,t){return i(this,void 0,void 0,(function*(){return this.request("HEAD",e,null,t||{})}))}sendStream(e,t,r,n){return i(this,void 0,void 0,(function*(){return this.request(e,t,r,n)}))}getJson(e,t={}){return i(this,void 0,void 0,(function*(){t[p.Accept]=this._getExistingOrDefaultHeader(t,p.Accept,f.ApplicationJson);const r=yield this.get(e,t);return this._processResponse(r,this.requestOptions)}))}postJson(e,t,r={}){return i(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[p.Accept]=this._getExistingOrDefaultHeader(r,p.Accept,f.ApplicationJson);r[p.ContentType]=this._getExistingOrDefaultHeader(r,p.ContentType,f.ApplicationJson);const o=yield this.post(e,n,r);return this._processResponse(o,this.requestOptions)}))}putJson(e,t,r={}){return i(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[p.Accept]=this._getExistingOrDefaultHeader(r,p.Accept,f.ApplicationJson);r[p.ContentType]=this._getExistingOrDefaultHeader(r,p.ContentType,f.ApplicationJson);const o=yield this.put(e,n,r);return this._processResponse(o,this.requestOptions)}))}patchJson(e,t,r={}){return i(this,void 0,void 0,(function*(){const n=JSON.stringify(t,null,2);r[p.Accept]=this._getExistingOrDefaultHeader(r,p.Accept,f.ApplicationJson);r[p.ContentType]=this._getExistingOrDefaultHeader(r,p.ContentType,f.ApplicationJson);const o=yield this.patch(e,n,r);return this._processResponse(o,this.requestOptions)}))}request(e,t,r,n){return i(this,void 0,void 0,(function*(){if(this._disposed){throw new Error("Client has already been disposed.")}const o=new URL(t);let s=this._prepareRequest(e,o,n);const i=this._allowRetries&&g.includes(e)?this._maxRetries+1:1;let a=0;let u;do{u=yield this.requestRaw(s,r);if(u&&u.message&&u.message.statusCode===d.Unauthorized){let e;for(const t of this.handlers){if(t.canHandleAuthentication(u)){e=t;break}}if(e){return e.handleAuthentication(this,s,r)}else{return u}}let t=this._maxRedirects;while(u.message.statusCode&&h.includes(u.message.statusCode)&&this._allowRedirects&&t>0){const i=u.message.headers["location"];if(!i){break}const a=new URL(i);if(o.protocol==="https:"&&o.protocol!==a.protocol&&!this._allowRedirectDowngrade){throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.")}yield u.readBody();if(a.hostname!==o.hostname){for(const e in n){if(e.toLowerCase()==="authorization"){delete n[e]}}}s=this._prepareRequest(e,a,n);u=yield this.requestRaw(s,r);t--}if(!u.message.statusCode||!m.includes(u.message.statusCode)){return u}a+=1;if(a<i){yield u.readBody();yield this._performExponentialBackoff(a)}}while(a<i);return u}))}dispose(){if(this._agent){this._agent.destroy()}this._disposed=true}requestRaw(e,t){return i(this,void 0,void 0,(function*(){return new Promise(((r,n)=>{function callbackForResult(e,t){if(e){n(e)}else if(!t){n(new Error("Unknown error"))}else{r(t)}}this.requestRawWithCallback(e,t,callbackForResult)}))}))}requestRawWithCallback(e,t,r){if(typeof t==="string"){if(!e.options.headers){e.options.headers={}}e.options.headers["Content-Length"]=Buffer.byteLength(t,"utf8")}let n=false;function handleResult(e,t){if(!n){n=true;r(e,t)}}const o=e.httpModule.request(e.options,(e=>{const t=new HttpClientResponse(e);handleResult(undefined,t)}));let s;o.on("socket",(e=>{s=e}));o.setTimeout(this._socketTimeout||3*6e4,(()=>{if(s){s.end()}handleResult(new Error(`Request timeout: ${e.options.path}`))}));o.on("error",(function(e){handleResult(e)}));if(t&&typeof t==="string"){o.write(t,"utf8")}if(t&&typeof t!=="string"){t.on("close",(function(){o.end()}));t.pipe(o)}else{o.end()}}getAgent(e){const t=new URL(e);return this._getAgent(t)}_prepareRequest(e,t,r){const n={};n.parsedUrl=t;const o=n.parsedUrl.protocol==="https:";n.httpModule=o?u:a;const s=o?443:80;n.options={};n.options.host=n.parsedUrl.hostname;n.options.port=n.parsedUrl.port?parseInt(n.parsedUrl.port):s;n.options.path=(n.parsedUrl.pathname||"")+(n.parsedUrl.search||"");n.options.method=e;n.options.headers=this._mergeHeaders(r);if(this.userAgent!=null){n.options.headers["user-agent"]=this.userAgent}n.options.agent=this._getAgent(n.parsedUrl);if(this.handlers){for(const e of this.handlers){e.prepareRequest(n.options)}}return n}_mergeHeaders(e){if(this.requestOptions&&this.requestOptions.headers){return Object.assign({},lowercaseKeys(this.requestOptions.headers),lowercaseKeys(e||{}))}return lowercaseKeys(e||{})}_getExistingOrDefaultHeader(e,t,r){let n;if(this.requestOptions&&this.requestOptions.headers){n=lowercaseKeys(this.requestOptions.headers)[t]}return e[t]||n||r}_getAgent(e){let t;const r=c.getProxyUrl(e);const n=r&&r.hostname;if(this._keepAlive&&n){t=this._proxyAgent}if(this._keepAlive&&!n){t=this._agent}if(t){return t}const o=e.protocol==="https:";let s=100;if(this.requestOptions){s=this.requestOptions.maxSockets||a.globalAgent.maxSockets}if(r&&r.hostname){const e={maxSockets:s,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(r.username||r.password)&&{proxyAuth:`${r.username}:${r.password}`}),{host:r.hostname,port:r.port})};let n;const i=r.protocol==="https:";if(o){n=i?l.httpsOverHttps:l.httpsOverHttp}else{n=i?l.httpOverHttps:l.httpOverHttp}t=n(e);this._proxyAgent=t}if(this._keepAlive&&!t){const e={keepAlive:this._keepAlive,maxSockets:s};t=o?new u.Agent(e):new a.Agent(e);this._agent=t}if(!t){t=o?u.globalAgent:a.globalAgent}if(o&&this._ignoreSslError){t.options=Object.assign(t.options||{},{rejectUnauthorized:false})}return t}_performExponentialBackoff(e){return i(this,void 0,void 0,(function*(){e=Math.min(v,e);const t=y*Math.pow(2,e);return new Promise((e=>setTimeout((()=>e()),t)))}))}_processResponse(e,t){return i(this,void 0,void 0,(function*(){return new Promise(((r,n)=>i(this,void 0,void 0,(function*(){const o=e.message.statusCode||0;const s={statusCode:o,result:null,headers:{}};if(o===d.NotFound){r(s)}function dateTimeDeserializer(e,t){if(typeof t==="string"){const e=new Date(t);if(!isNaN(e.valueOf())){return e}}return t}let i;let a;try{a=yield e.readBody();if(a&&a.length>0){if(t&&t.deserializeDates){i=JSON.parse(a,dateTimeDeserializer)}else{i=JSON.parse(a)}s.result=i}s.headers=e.message.headers}catch(e){}if(o>299){let e;if(i&&i.message){e=i.message}else if(a&&a.length>0){e=a}else{e=`Failed request: (${o})`}const t=new HttpClientError(e,o);t.result=s.result;n(t)}else{r(s)}}))))}))}}t.HttpClient=HttpClient;const lowercaseKeys=e=>Object.keys(e).reduce(((t,r)=>(t[r.toLowerCase()]=e[r],t)),{})},835:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});t.checkBypass=t.getProxyUrl=void 0;function getProxyUrl(e){const t=e.protocol==="https:";if(checkBypass(e)){return undefined}const r=(()=>{if(t){return process.env["https_proxy"]||process.env["HTTPS_PROXY"]}else{return process.env["http_proxy"]||process.env["HTTP_PROXY"]}})();if(r){return new URL(r)}else{return undefined}}t.getProxyUrl=getProxyUrl;function checkBypass(e){if(!e.hostname){return false}const t=process.env["no_proxy"]||process.env["NO_PROXY"]||"";if(!t){return false}let r;if(e.port){r=Number(e.port)}else if(e.protocol==="http:"){r=80}else if(e.protocol==="https:"){r=443}const n=[e.hostname.toUpperCase()];if(typeof r==="number"){n.push(`${n[0]}:${r}`)}for(const e of t.split(",").map((e=>e.trim().toUpperCase())).filter((e=>e))){if(n.some((t=>t===e))){return true}}return false}t.checkBypass=checkBypass},797:(e,t,r)=>{var n=r(997),o=r(659),s=o.repeat,i=o.truncate,a=o.pad;function Table(e){this.options=o.options({chars:{top:"─","top-mid":"┬","top-left":"┌","top-right":"┐",bottom:"─","bottom-mid":"┴","bottom-left":"└","bottom-right":"┘",left:"│","left-mid":"├",mid:"─","mid-mid":"┼",right:"│","right-mid":"┤",middle:"│"},truncate:"…",colWidths:[],colAligns:[],style:{"padding-left":1,"padding-right":1,head:["red"],border:["grey"],compact:false},head:[]},e);if(e&&e.rows){for(var t=0;t<e.rows.length;t++){this.push(e.rows[t])}}}Table.prototype.__proto__=Array.prototype;Table.prototype.__defineGetter__("width",(function(){var e=this.toString().split("\n");if(e.length)return e[0].length;return 0}));Table.prototype.render;Table.prototype.toString=function(){var e="",t=this.options,r=t.style,u=t.head,c=t.chars,l=t.truncate,d=t.colWidths||new Array(this.head.length),p=0;if(!u.length&&!this.length)return"";if(!d.length){var f=this.slice(0);if(u.length){f=f.concat([u])}f.forEach((function(e){if(typeof e==="object"&&e.length){extractColumnWidths(e)}else{var t=Object.keys(e)[0],r=e[t];d[0]=Math.max(d[0]||0,get_width(t)||0);if(typeof r==="object"&&r.length){extractColumnWidths(r,1)}else{d[1]=Math.max(d[1]||0,get_width(r)||0)}}}))}p=(d.length==1?d[0]:d.reduce((function(e,t){return e+t})))+d.length+1;function extractColumnWidths(e,t){var t=t||0;e.forEach((function(e,r){d[r+t]=Math.max(d[r+t]||0,get_width(e)||0)}))}function get_width(e){return typeof e=="object"&&e.width!=undefined?e.width:(typeof e=="object"?o.strlen(e.text):o.strlen(e))+(r["padding-left"]||0)+(r["padding-right"]||0)}function line(e,r,n,o){var i=0,e=r+s(e,p-2)+n;d.forEach((function(t,r){if(r==d.length-1)return;i+=t+1;e=e.substr(0,i)+o+e.substr(i+1)}));return applyStyles(t.style.border,e)}function lineTop(){var t=line(c.top,c["top-left"]||c.top,c["top-right"]||c.top,c["top-mid"]);if(t)e+=t+"\n"}function generateRow(e,r){var n=[],o=0;if(!Array.isArray(e)&&typeof e==="object"){var s=Object.keys(e)[0],i=e[s],a=true;if(Array.isArray(i)){e=i;e.unshift(s)}else{e=[s,i]}}e.forEach((function(e,t){var r=e.toString().split("\n").reduce((function(e,r){e.push(string(r,t));return e}),[]);var s=r.length;if(s>o){o=s}n.push({contents:r,height:s})}));var u=new Array(o);n.forEach((function(e,n){e.contents.forEach((function(e,o){if(!u[o]){u[o]=[]}if(r||a&&n===0&&t.style.head){e=applyStyles(t.style.head,e)}u[o].push(e)}));for(var s=e.height,i=o;s<i;s++){if(!u[s]){u[s]=[]}u[s].push(string("",n))}}));var l="";u.forEach((function(e,r){if(l.length>0){l+="\n"+applyStyles(t.style.border,c.left)}l+=e.join(applyStyles(t.style.border,c.middle))+applyStyles(t.style.border,c.right)}));return applyStyles(t.style.border,c.left)+l}function applyStyles(e,t){if(!t)return"";e.forEach((function(e){t=n[e](t)}));return t}function string(e,n){var e=String(typeof e=="object"&&e.text?e.text:e),u=o.strlen(e),c=d[n]-(r["padding-left"]||0)-(r["padding-right"]||0),p=t.colAligns[n]||"left";return s(" ",r["padding-left"]||0)+(u==c?e:u<c?a(e,c+(e.length-u)," ",p=="left"?"right":p=="middle"?"both":"left"):l?i(e,c,l):e)+s(" ",r["padding-right"]||0)}if(u.length){lineTop();e+=generateRow(u,r.head)+"\n"}if(this.length)this.forEach((function(t,n){if(!u.length&&n==0)lineTop();else{if(!r.compact||n<!!u.length?1:false||t.length==0){var o=line(c.mid,c["left-mid"],c["right-mid"],c["mid-mid"]);if(o)e+=o+"\n"}}if(t.hasOwnProperty("length")&&!t.length){return}else{e+=generateRow(t)+"\n"}}));var h=line(c.bottom,c["bottom-left"]||c.bottom,c["bottom-right"]||c.bottom,c["bottom-mid"]);if(h)e+=h;else e=e.slice(0,-1);return e};e.exports=Table;e.exports.version="0.0.1"},659:(e,t)=>{t.repeat=function(e,t){return Array(t+1).join(e)};t.pad=function(e,t,r,n){if(t+1>=e.length)switch(n){case"left":e=Array(t+1-e.length).join(r)+e;break;case"both":var o=Math.ceil((padlen=t-e.length)/2);var s=padlen-o;e=Array(s+1).join(r)+e+Array(o+1).join(r);break;default:e=e+Array(t+1-e.length).join(r)}return e};t.truncate=function(e,t,r){r=r||"…";return e.length>=t?e.substr(0,t-r.length)+r:e};function options(e,t){for(var r in t){if(r==="__proto__"||r==="constructor"||r==="prototype"){continue}if(t[r]&&t[r].constructor&&t[r].constructor===Object){e[r]=e[r]||{};options(e[r],t[r])}else{e[r]=t[r]}}return e}t.options=options;t.strlen=function(e){var t=/\u001b\[(?:\d*;){0,5}\d*m/g;var r=(""+e).replace(t,"");var n=r.split("\n");return n.reduce((function(e,t){return t.length>e?t.length:e}),0)}},595:(e,t,r)=>{var n={};e["exports"]=n;n.themes={};var o=n.styles=r(104);var s=Object.defineProperties;n.supportsColor=r(662);if(typeof n.enabled==="undefined"){n.enabled=n.supportsColor}n.stripColors=n.strip=function(e){return(""+e).replace(/\x1B\[\d+m/g,"")};var i=n.stylize=function stylize(e,t){return o[t].open+e+o[t].close};var a=/[|\\{}()[\]^$+*?.]/g;var escapeStringRegexp=function(e){if(typeof e!=="string"){throw new TypeError("Expected a string")}return e.replace(a,"\\$&")};function build(e){var t=function builder(){return applyStyle.apply(builder,arguments)};t._styles=e;t.__proto__=c;return t}var u=function(){var e={};o.grey=o.gray;Object.keys(o).forEach((function(t){o[t].closeRe=new RegExp(escapeStringRegexp(o[t].close),"g");e[t]={get:function(){return build(this._styles.concat(t))}}}));return e}();var c=s((function colors(){}),u);function applyStyle(){var e=arguments;var t=e.length;var r=t!==0&&String(arguments[0]);if(t>1){for(var s=1;s<t;s++){r+=" "+e[s]}}if(!n.enabled||!r){return r}var i=this._styles;var a=i.length;while(a--){var u=o[i[a]];r=u.open+r.replace(u.closeRe,u.open)+u.close}return r}function applyTheme(e){for(var t in e){(function(t){n[t]=function(r){return n[e[t]](r)}})(t)}}n.setTheme=function(e){if(typeof e==="string"){try{n.themes[e]=require(e);applyTheme(n.themes[e]);return n.themes[e]}catch(e){console.log(e);return e}}else{applyTheme(e)}};function init(){var e={};Object.keys(u).forEach((function(t){e[t]={get:function(){return build([t])}}}));return e}var l=function sequencer(e,t){var r=t.split(""),n=0;r=r.map(e);return r.join("")};n.trap=r(302);n.zalgo=r(743);n.maps={};n.maps.america=r(936);n.maps.zebra=r(989);n.maps.rainbow=r(210);n.maps.random=r(441);for(var d in n.maps){(function(e){n[e]=function(t){return l(n.maps[e],t)}})(d)}s(n,init())},302:e=>{e["exports"]=function runTheTrap(e,t){var r="";e=e||"Run the trap, drop the bass";e=e.split("");var n={a:["@","Ą","Ⱥ","Ʌ","Δ","Λ","Д"],b:["ß","Ɓ","Ƀ","ɮ","β","฿"],c:["©","Ȼ","Ͼ"],d:["Ð","Ɗ","Ԁ","ԁ","Ԃ","ԃ"],e:["Ë","ĕ","Ǝ","ɘ","Σ","ξ","Ҽ","੬"],f:["Ӻ"],g:["ɢ"],h:["Ħ","ƕ","Ң","Һ","Ӈ","Ԋ"],i:["༏"],j:["Ĵ"],k:["ĸ","Ҡ","Ӄ","Ԟ"],l:["Ĺ"],m:["ʍ","Ӎ","ӎ","Ԡ","ԡ","൩"],n:["Ñ","ŋ","Ɲ","Ͷ","Π","Ҋ"],o:["Ø","õ","ø","Ǿ","ʘ","Ѻ","ם","۝","๏"],p:["Ƿ","Ҏ"],q:["্"],r:["®","Ʀ","Ȑ","Ɍ","ʀ","Я"],s:["§","Ϟ","ϟ","Ϩ"],t:["Ł","Ŧ","ͳ"],u:["Ʊ","Ս"],v:["ט"],w:["Ш","Ѡ","Ѽ","൰"],x:["Ҳ","Ӿ","Ӽ","ӽ"],y:["¥","Ұ","Ӌ"],z:["Ƶ","ɀ"]};e.forEach((function(e){e=e.toLowerCase();var t=n[e]||[" "];var o=Math.floor(Math.random()*t.length);if(typeof n[e]!=="undefined"){r+=n[e][o]}else{r+=e}}));return r}},743:e=>{e["exports"]=function zalgo(e,t){e=e||"   he is here   ";var r={up:["̍","̎","̄","̅","̿","̑","̆","̐","͒","͗","͑","̇","̈","̊","͂","̓","̈","͊","͋","͌","̃","̂","̌","͐","̀","́","̋","̏","̒","̓","̔","̽","̉","ͣ","ͤ","ͥ","ͦ","ͧ","ͨ","ͩ","ͪ","ͫ","ͬ","ͭ","ͮ","ͯ","̾","͛","͆","̚"],down:["̖","̗","̘","̙","̜","̝","̞","̟","̠","̤","̥","̦","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̹","̺","̻","̼","ͅ","͇","͈","͉","͍","͎","͓","͔","͕","͖","͙","͚","̣"],mid:["̕","̛","̀","́","͘","̡","̢","̧","̨","̴","̵","̶","͜","͝","͞","͟","͠","͢","̸","̷","͡"," ҉"]},n=[].concat(r.up,r.down,r.mid),zalgo={};function randomNumber(e){var t=Math.floor(Math.random()*e);return t}function is_char(e){var t=false;n.filter((function(r){t=r===e}));return t}function heComes(e,t){var n="",o,s;t=t||{};t["up"]=t["up"]||true;t["mid"]=t["mid"]||true;t["down"]=t["down"]||true;t["size"]=t["size"]||"maxi";e=e.split("");for(s in e){if(is_char(s)){continue}n=n+e[s];o={up:0,down:0,mid:0};switch(t.size){case"mini":o.up=randomNumber(8);o.min=randomNumber(2);o.down=randomNumber(8);break;case"maxi":o.up=randomNumber(16)+3;o.min=randomNumber(4)+1;o.down=randomNumber(64)+3;break;default:o.up=randomNumber(8)+1;o.mid=randomNumber(6)/2;o.down=randomNumber(8)+1;break}var i=["up","mid","down"];for(var a in i){var u=i[a];for(var c=0;c<=o[u];c++){if(t[u]){n=n+r[u][randomNumber(r[u].length)]}}}}return n}return heComes(e)}},936:(e,t,r)=>{var n=r(595);e["exports"]=function(){return function(e,t,r){if(e===" ")return e;switch(t%3){case 0:return n.red(e);case 1:return n.white(e);case 2:return n.blue(e)}}}()},210:(e,t,r)=>{var n=r(595);e["exports"]=function(){var e=["red","yellow","green","blue","magenta"];return function(t,r,o){if(t===" "){return t}else{return n[e[r++%e.length]](t)}}}()},441:(e,t,r)=>{var n=r(595);e["exports"]=function(){var e=["underline","inverse","grey","yellow","red","green","blue","white","cyan","magenta"];return function(t,r,o){return t===" "?t:n[e[Math.round(Math.random()*(e.length-1))]](t)}}()},989:(e,t,r)=>{var n=r(595);e["exports"]=function(e,t,r){return t%2===0?e:n.inverse(e)}},104:e=>{var t={};e["exports"]=t;var r={reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29],black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],grey:[90,39],bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],blackBG:[40,49],redBG:[41,49],greenBG:[42,49],yellowBG:[43,49],blueBG:[44,49],magentaBG:[45,49],cyanBG:[46,49],whiteBG:[47,49]};Object.keys(r).forEach((function(e){var n=r[e];var o=t[e]=[];o.open="["+n[0]+"m";o.close="["+n[1]+"m"}))},662:e=>{var t=process.argv;e.exports=function(){if(t.indexOf("--no-color")!==-1||t.indexOf("--color=false")!==-1){return false}if(t.indexOf("--color")!==-1||t.indexOf("--color=true")!==-1||t.indexOf("--color=always")!==-1){return true}if(process.stdout&&!process.stdout.isTTY){return false}if(process.platform==="win32"){return true}if("COLORTERM"in process.env){return true}if(process.env.TERM==="dumb"){return false}if(/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)){return true}return false}()},997:(e,t,r)=>{var n=r(595);e["exports"]=n},294:(e,t,r)=>{e.exports=r(219)},219:(e,t,r)=>{"use strict";var n=r(808);var o=r(404);var s=r(685);var i=r(687);var a=r(361);var u=r(491);var c=r(837);t.httpOverHttp=httpOverHttp;t.httpsOverHttp=httpsOverHttp;t.httpOverHttps=httpOverHttps;t.httpsOverHttps=httpsOverHttps;function httpOverHttp(e){var t=new TunnelingAgent(e);t.request=s.request;return t}function httpsOverHttp(e){var t=new TunnelingAgent(e);t.request=s.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function httpOverHttps(e){var t=new TunnelingAgent(e);t.request=i.request;return t}function httpsOverHttps(e){var t=new TunnelingAgent(e);t.request=i.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function TunnelingAgent(e){var t=this;t.options=e||{};t.proxyOptions=t.options.proxy||{};t.maxSockets=t.options.maxSockets||s.Agent.defaultMaxSockets;t.requests=[];t.sockets=[];t.on("free",(function onFree(e,r,n,o){var s=toOptions(r,n,o);for(var i=0,a=t.requests.length;i<a;++i){var u=t.requests[i];if(u.host===s.host&&u.port===s.port){t.requests.splice(i,1);u.request.onSocket(e);return}}e.destroy();t.removeSocket(e)}))}c.inherits(TunnelingAgent,a.EventEmitter);TunnelingAgent.prototype.addRequest=function addRequest(e,t,r,n){var o=this;var s=mergeOptions({request:e},o.options,toOptions(t,r,n));if(o.sockets.length>=this.maxSockets){o.requests.push(s);return}o.createSocket(s,(function(t){t.on("free",onFree);t.on("close",onCloseOrRemove);t.on("agentRemove",onCloseOrRemove);e.onSocket(t);function onFree(){o.emit("free",t,s)}function onCloseOrRemove(e){o.removeSocket(t);t.removeListener("free",onFree);t.removeListener("close",onCloseOrRemove);t.removeListener("agentRemove",onCloseOrRemove)}}))};TunnelingAgent.prototype.createSocket=function createSocket(e,t){var r=this;var n={};r.sockets.push(n);var o=mergeOptions({},r.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:false,headers:{host:e.host+":"+e.port}});if(e.localAddress){o.localAddress=e.localAddress}if(o.proxyAuth){o.headers=o.headers||{};o.headers["Proxy-Authorization"]="Basic "+new Buffer(o.proxyAuth).toString("base64")}l("making CONNECT request");var s=r.request(o);s.useChunkedEncodingByDefault=false;s.once("response",onResponse);s.once("upgrade",onUpgrade);s.once("connect",onConnect);s.once("error",onError);s.end();function onResponse(e){e.upgrade=true}function onUpgrade(e,t,r){process.nextTick((function(){onConnect(e,t,r)}))}function onConnect(o,i,a){s.removeAllListeners();i.removeAllListeners();if(o.statusCode!==200){l("tunneling socket could not be established, statusCode=%d",o.statusCode);i.destroy();var u=new Error("tunneling socket could not be established, "+"statusCode="+o.statusCode);u.code="ECONNRESET";e.request.emit("error",u);r.removeSocket(n);return}if(a.length>0){l("got illegal response body from proxy");i.destroy();var u=new Error("got illegal response body from proxy");u.code="ECONNRESET";e.request.emit("error",u);r.removeSocket(n);return}l("tunneling connection has established");r.sockets[r.sockets.indexOf(n)]=i;return t(i)}function onError(t){s.removeAllListeners();l("tunneling socket could not be established, cause=%s\n",t.message,t.stack);var o=new Error("tunneling socket could not be established, "+"cause="+t.message);o.code="ECONNRESET";e.request.emit("error",o);r.removeSocket(n)}};TunnelingAgent.prototype.removeSocket=function removeSocket(e){var t=this.sockets.indexOf(e);if(t===-1){return}this.sockets.splice(t,1);var r=this.requests.shift();if(r){this.createSocket(r,(function(e){r.request.onSocket(e)}))}};function createSecureSocket(e,t){var r=this;TunnelingAgent.prototype.createSocket.call(r,e,(function(n){var s=e.request.getHeader("host");var i=mergeOptions({},r.options,{socket:n,servername:s?s.replace(/:.*$/,""):e.host});var a=o.connect(0,i);r.sockets[r.sockets.indexOf(n)]=a;t(a)}))}function toOptions(e,t,r){if(typeof e==="string"){return{host:e,port:t,localAddress:r}}return e}function mergeOptions(e){for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];if(typeof n==="object"){var o=Object.keys(n);for(var s=0,i=o.length;s<i;++s){var a=o[s];if(n[a]!==undefined){e[a]=n[a]}}}}return e}var l;if(process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)){l=function(){var e=Array.prototype.slice.call(arguments);if(typeof e[0]==="string"){e[0]="TUNNEL: "+e[0]}else{e.unshift("TUNNEL:")}console.error.apply(console,e)}}else{l=function(){}}t.debug=l},491:e=>{"use strict";e.exports=require("assert")},361:e=>{"use strict";e.exports=require("events")},147:e=>{"use strict";e.exports=require("fs")},685:e=>{"use strict";e.exports=require("http")},687:e=>{"use strict";e.exports=require("https")},808:e=>{"use strict";e.exports=require("net")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")},404:e=>{"use strict";e.exports=require("tls")},837:e=>{"use strict";e.exports=require("util")}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var o=t[r]={exports:{}};var s=true;try{e[r].call(o.exports,o,o.exports,__nccwpck_require__);s=false}finally{if(s)delete t[r]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{const e=__nccwpck_require__(186);const t=__nccwpck_require__(255);const r=__nccwpck_require__(797);const n="Scanning";const o=5e3;const s=1e3*60*15;const i="Time out";const a="Pass";const u="Fail";let c;async function triggerScan(r){e.info("Scan target: "+r);const n=`${process.env.CS_SCAN_URL}/ci/scan`;e.debug("Scan URL: "+n);const o=new t.HttpClient;const s=await o.postJson(n,[{type:"repo",targets:[r],keys:[]}],{"Content-Type":"application/json","x-api-key":process.env.CS_API_TOKEN});if(s.statusCode!==200)return e.setFailed("Failed to trigger scan");if(s.result&&s.result.meta&&s.result.meta.statusCode===200){e.info(JSON.stringify(s.result.response));e.info("Scan triggered successfully");c=s.result.response.baseUrl;return getScanResult(s.result.response.scanId)}return e.setFailed(s.result.meta.message)}async function getScanResult(r){const i=`${process.env.CS_SCAN_URL}/ci/scan/${r}/overview`;const a=new t.HttpClient;const u=setInterval((async()=>{const t=await a.getJson(i,{"Content-Type":"application/json","x-api-key":process.env.CS_API_TOKEN});if(t.statusCode!==200)return e.setFailed("Failed to get scan result");if(t.result&&t.result.meta&&t.result.meta.statusCode===200){e.info(JSON.stringify(t.result.response));if(t.result.response.status!==n){clearInterval(u);e.info("Scan completed");return summaryResult(t.result.response,r)}return e.info("Checking scan status...")}return e.setFailed(t.result.meta)}),o);setTimeout((()=>{clearInterval(u);e.setFailed("Scan timeout");printSummary(r)}),s)}function printSummary(t,n=null){const o=new r({head:["Scan Id","Critical","High","Medium","Low","Status"],title:"Vulnerability Summary"});const s=`${c}/security/${t}/dashboard`;e.info(`Scan dashboard: `+s);let l="N/A";let d="N/A";let p="N/A";let f="N/A";let h=a;if(n===null){h=i}else{if(n.critical===null&&n.high===null&&n.medium===null&&n.low===null){h=u}else{l=n.critical;d=n.high;p=n.medium;f=n.low;if(l>0&&d>0){h=u}}}o.push([t,l,d,p,f,h]);e.info(o)}function summaryResult(t,r){if(t.status==="Successful"){if(t.critical>0){e.setFailed("Scan completed with critical issues")}e.info("Scan completed successfully")}else{e.setFailed("Scan completed with issues")}printSummary(r,t);process.exit(0)}async function run(){try{if(!process.env.CS_SCAN_URL)e.setFailed("Please specify CS_SCAN_URL env");if(!process.env.CS_API_TOKEN)e.setFailed("Please specify CS_API_TOKEN env");const t=`${process.env.GITHUB_SERVER}/${process.env.GITHUB_REPOSITORY}`;return triggerScan(t)}catch(t){e.setFailed(t)}}run()})();module.exports=r})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 797:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


/**
 * Module dependencies.
 */

var colors = __nccwpck_require__(997)
  , utils = __nccwpck_require__(659)
  , repeat = utils.repeat
  , truncate = utils.truncate
  , pad = utils.pad;

/**
 * Table constructor
 *
 * @param {Object} options
 * @api public
 */

function Table (options){
  this.options = utils.options({
      chars: {
          'top': '─'
        , 'top-mid': '┬'
        , 'top-left': '┌'
        , 'top-right': '┐'
        , 'bottom': '─'
        , 'bottom-mid': '┴'
        , 'bottom-left': '└'
        , 'bottom-right': '┘'
        , 'left': '│'
        , 'left-mid': '├'
        , 'mid': '─'
        , 'mid-mid': '┼'
        , 'right': '│'
        , 'right-mid': '┤'
        , 'middle': '│'
      }
    , truncate: '…'
    , colWidths: []
    , colAligns: []
    , style: {
          'padding-left': 1
        , 'padding-right': 1
        , head: ['red']
        , border: ['grey']
        , compact : false
      }
    , head: []
  }, options);

  if (options && options.rows) {
    for (var i = 0; i < options.rows.length; i++) {
      this.push(options.rows[i]);
    }
  }
}

/**
 * Inherit from Array.
 */

Table.prototype.__proto__ = Array.prototype;

/**
 * Width getter
 *
 * @return {Number} width
 * @api public
 */

Table.prototype.__defineGetter__('width', function (){
  var str = this.toString().split("\n");
  if (str.length) return str[0].length;
  return 0;
});

/**
 * Render to a string.
 *
 * @return {String} table representation
 * @api public
 */

Table.prototype.render
Table.prototype.toString = function (){
  var ret = ''
    , options = this.options
    , style = options.style
    , head = options.head
    , chars = options.chars
    , truncater = options.truncate
      , colWidths = options.colWidths || new Array(this.head.length)
      , totalWidth = 0;

    if (!head.length && !this.length) return '';

    if (!colWidths.length){
      var all_rows = this.slice(0);
      if (head.length) { all_rows = all_rows.concat([head]) };

      all_rows.forEach(function(cells){
        // horizontal (arrays)
        if (typeof cells === 'object' && cells.length) {
          extractColumnWidths(cells);

        // vertical (objects)
        } else {
          var header_cell = Object.keys(cells)[0]
            , value_cell = cells[header_cell];

          colWidths[0] = Math.max(colWidths[0] || 0, get_width(header_cell) || 0);

          // cross (objects w/ array values)
          if (typeof value_cell === 'object' && value_cell.length) {
            extractColumnWidths(value_cell, 1);
          } else {
            colWidths[1] = Math.max(colWidths[1] || 0, get_width(value_cell) || 0);
          }
        }
    });
  };

  totalWidth = (colWidths.length == 1 ? colWidths[0] : colWidths.reduce(
    function (a, b){
      return a + b
    })) + colWidths.length + 1;

  function extractColumnWidths(arr, offset) {
    var offset = offset || 0;
    arr.forEach(function(cell, i){
      colWidths[i + offset] = Math.max(colWidths[i + offset] || 0, get_width(cell) || 0);
    });
  };

  function get_width(obj) {
    return typeof obj == 'object' && obj.width != undefined
         ? obj.width
         : ((typeof obj == 'object' ? utils.strlen(obj.text) : utils.strlen(obj)) + (style['padding-left'] || 0) + (style['padding-right'] || 0))
  }

  // draws a line
  function line (line, left, right, intersection){
    var width = 0
      , line =
          left
        + repeat(line, totalWidth - 2)
        + right;

    colWidths.forEach(function (w, i){
      if (i == colWidths.length - 1) return;
      width += w + 1;
      line = line.substr(0, width) + intersection + line.substr(width + 1);
    });

    return applyStyles(options.style.border, line);
  };

  // draws the top line
  function lineTop (){
    var l = line(chars.top
               , chars['top-left'] || chars.top
               , chars['top-right'] ||  chars.top
               , chars['top-mid']);
    if (l)
      ret += l + "\n";
  };

  function generateRow (items, style) {
    var cells = []
      , max_height = 0;

    // prepare vertical and cross table data
    if (!Array.isArray(items) && typeof items === "object") {
      var key = Object.keys(items)[0]
        , value = items[key]
        , first_cell_head = true;

      if (Array.isArray(value)) {
        items = value;
        items.unshift(key);
      } else {
        items = [key, value];
      }
    }

    // transform array of item strings into structure of cells
    items.forEach(function (item, i) {
      var contents = item.toString().split("\n").reduce(function (memo, l) {
        memo.push(string(l, i));
        return memo;
      }, [])

      var height = contents.length;
      if (height > max_height) { max_height = height };

      cells.push({ contents: contents , height: height });
    });

    // transform vertical cells into horizontal lines
    var lines = new Array(max_height);
    cells.forEach(function (cell, i) {
      cell.contents.forEach(function (line, j) {
        if (!lines[j]) { lines[j] = [] };
        if (style || (first_cell_head && i === 0 && options.style.head)) {
          line = applyStyles(options.style.head, line)
        }

        lines[j].push(line);
      });

      // populate empty lines in cell
      for (var j = cell.height, l = max_height; j < l; j++) {
        if (!lines[j]) { lines[j] = [] };
        lines[j].push(string('', i));
      }
    });
    var ret = "";
    lines.forEach(function (line, index) {
      if (ret.length > 0) {
        ret += "\n" + applyStyles(options.style.border, chars.left);
      }

      ret += line.join(applyStyles(options.style.border, chars.middle)) + applyStyles(options.style.border, chars.right);
    });

    return applyStyles(options.style.border, chars.left) + ret;
  };

  function applyStyles(styles, subject) {
    if (!subject)
      return '';
    styles.forEach(function(style) {
      subject = colors[style](subject);
    });
    return subject;
  };

  // renders a string, by padding it or truncating it
  function string (str, index){
    var str = String(typeof str == 'object' && str.text ? str.text : str)
      , length = utils.strlen(str)
      , width = colWidths[index]
          - (style['padding-left'] || 0)
          - (style['padding-right'] || 0)
      , align = options.colAligns[index] || 'left';

    return repeat(' ', style['padding-left'] || 0)
         + (length == width ? str :
             (length < width
              ? pad(str, ( width + (str.length - length) ), ' ', align == 'left' ? 'right' :
                  (align == 'middle' ? 'both' : 'left'))
              : (truncater ? truncate(str, width, truncater) : str))
           )
         + repeat(' ', style['padding-right'] || 0);
  };

  if (head.length){
    lineTop();

    ret += generateRow(head, style.head) + "\n"
  }

  if (this.length)
    this.forEach(function (cells, i){
      if (!head.length && i == 0)
        lineTop();
      else {
        if (!style.compact || i<(!!head.length) ?1: false || cells.length == 0){
          var l = line(chars.mid
                     , chars['left-mid']
                     , chars['right-mid']
                     , chars['mid-mid']);
          if (l)
            ret += l + "\n"
        }
      }

      if (cells.hasOwnProperty("length") && !cells.length) {
        return
      } else {
        ret += generateRow(cells) + "\n";
      };
    });

  var l = line(chars.bottom
             , chars['bottom-left'] || chars.bottom
             , chars['bottom-right'] || chars.bottom
             , chars['bottom-mid']);
  if (l)
    ret += l;
  else
    // trim the last '\n' if we didn't add the bottom decoration
    ret = ret.slice(0, -1);

  return ret;
};

/**
 * Module exports.
 */

module.exports = Table;

module.exports.version = '0.0.1';


/***/ }),

/***/ 659:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Repeats a string.
 *
 * @param {String} char(s)
 * @param {Number} number of times
 * @return {String} repeated string
 */

exports.repeat = function (str, times){
  return Array(times + 1).join(str);
};

/**
 * Pads a string
 *
 * @api public
 */

exports.pad = function (str, len, pad, dir) {
  if (len + 1 >= str.length)
    switch (dir){
      case 'left':
        str = Array(len + 1 - str.length).join(pad) + str;
        break;

      case 'both':
        var right = Math.ceil((padlen = len - str.length) / 2);
        var left = padlen - right;
        str = Array(left + 1).join(pad) + str + Array(right + 1).join(pad);
        break;

      default:
        str = str + Array(len + 1 - str.length).join(pad);
    };

  return str;
};

/**
 * Truncates a string
 *
 * @api public
 */

exports.truncate = function (str, length, chr){
  chr = chr || '…';
  return str.length >= length ? str.substr(0, length - chr.length) + chr : str;
};

/**
 * Copies and merges options with defaults.
 *
 * @param {Object} defaults
 * @param {Object} supplied options
 * @return {Object} new (merged) object
 */

function options(defaults, opts) {
  for (var p in opts) {
    if (p === '__proto__' || p === 'constructor' || p === 'prototype') {
        continue;
    }
    if (opts[p] && opts[p].constructor && opts[p].constructor === Object) {
      defaults[p] = defaults[p] || {};
      options(defaults[p], opts[p]);
    } else {
      defaults[p] = opts[p];
    }
  }
  return defaults;
};
exports.options = options;

//
// For consideration of terminal "color" programs like colors.js,
// which can add ANSI escape color codes to strings,
// we destyle the ANSI color escape codes for padding calculations.
//
// see: http://en.wikipedia.org/wiki/ANSI_escape_code
//
exports.strlen = function(str){
  var code = /\u001b\[(?:\d*;){0,5}\d*m/g;
  var stripped = ("" + str).replace(code,'');
  var split = stripped.split("\n");
  return split.reduce(function (memo, s) { return (s.length > memo) ? s.length : memo }, 0);
}


/***/ }),

/***/ 595:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*

The MIT License (MIT)

Original Library 
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var ansiStyles = colors.styles = __nccwpck_require__(104);
var defineProps = Object.defineProperties;

colors.supportsColor = __nccwpck_require__(662);

if (typeof colors.enabled === "undefined") {
  colors.enabled = colors.supportsColor;
}

colors.stripColors = colors.strip = function(str){
  return ("" + str).replace(/\x1B\[\d+m/g, '');
};


var stylize = colors.stylize = function stylize (str, style) {
  return ansiStyles[style].open + str + ansiStyles[style].close;
}

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe,  '\\$&');
}

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function () {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function (key) {
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function () {
        return build(this._styles.concat(key));
      }
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = arguments;
  var argsLen = args.length;
  var str = argsLen !== 0 && String(arguments[0]);
  if (argsLen > 1) {
    for (var a = 1; a < argsLen; a++) {
      str += ' ' + args[a];
    }
  }

  if (!colors.enabled || !str) {
    return str;
  }

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
  }

  return str;
}

function applyTheme (theme) {
  for (var style in theme) {
    (function(style){
      colors[style] = function(str){
        return colors[theme[style]](str);
      };
    })(style)
  }
}

colors.setTheme = function (theme) {
  if (typeof theme === 'string') {
    try {
      colors.themes[theme] = require(theme);
      applyTheme(colors.themes[theme]);
      return colors.themes[theme];
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    applyTheme(theme);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function (name) {
    ret[name] = {
      get: function () {
        return build([name]);
      }
    };
  });
  return ret;
}

var sequencer = function sequencer (map, str) {
  var exploded = str.split(""), i = 0;
  exploded = exploded.map(map);
  return exploded.join("");
};

// custom formatter methods
colors.trap = __nccwpck_require__(302);
colors.zalgo = __nccwpck_require__(743);

// maps
colors.maps = {};
colors.maps.america = __nccwpck_require__(936);
colors.maps.zebra = __nccwpck_require__(989);
colors.maps.rainbow = __nccwpck_require__(210);
colors.maps.random = __nccwpck_require__(441)

for (var map in colors.maps) {
  (function(map){
    colors[map] = function (str) {
      return sequencer(colors.maps[map], str);
    }
  })(map)
}

defineProps(colors, init());

/***/ }),

/***/ 302:
/***/ ((module) => {

module['exports'] = function runTheTrap (text, options) {
  var result = "";
  text = text || "Run the trap, drop the bass";
  text = text.split('');
  var trap = {
    a: ["\u0040", "\u0104", "\u023a", "\u0245", "\u0394", "\u039b", "\u0414"],
    b: ["\u00df", "\u0181", "\u0243", "\u026e", "\u03b2", "\u0e3f"],
    c: ["\u00a9", "\u023b", "\u03fe"],
    d: ["\u00d0", "\u018a", "\u0500" , "\u0501" ,"\u0502", "\u0503"],
    e: ["\u00cb", "\u0115", "\u018e", "\u0258", "\u03a3", "\u03be", "\u04bc", "\u0a6c"],
    f: ["\u04fa"],
    g: ["\u0262"],
    h: ["\u0126", "\u0195", "\u04a2", "\u04ba", "\u04c7", "\u050a"],
    i: ["\u0f0f"],
    j: ["\u0134"],
    k: ["\u0138", "\u04a0", "\u04c3", "\u051e"],
    l: ["\u0139"],
    m: ["\u028d", "\u04cd", "\u04ce", "\u0520", "\u0521", "\u0d69"],
    n: ["\u00d1", "\u014b", "\u019d", "\u0376", "\u03a0", "\u048a"],
    o: ["\u00d8", "\u00f5", "\u00f8", "\u01fe", "\u0298", "\u047a", "\u05dd", "\u06dd", "\u0e4f"],
    p: ["\u01f7", "\u048e"],
    q: ["\u09cd"],
    r: ["\u00ae", "\u01a6", "\u0210", "\u024c", "\u0280", "\u042f"],
    s: ["\u00a7", "\u03de", "\u03df", "\u03e8"],
    t: ["\u0141", "\u0166", "\u0373"],
    u: ["\u01b1", "\u054d"],
    v: ["\u05d8"],
    w: ["\u0428", "\u0460", "\u047c", "\u0d70"],
    x: ["\u04b2", "\u04fe", "\u04fc", "\u04fd"],
    y: ["\u00a5", "\u04b0", "\u04cb"],
    z: ["\u01b5", "\u0240"]
  }
  text.forEach(function(c){
    c = c.toLowerCase();
    var chars = trap[c] || [" "];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== "undefined") {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;

}


/***/ }),

/***/ 743:
/***/ ((module) => {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || "   he is here   ";
  var soul = {
    "up" : [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚'
    ],
    "down" : [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣'
    ],
    "mid" : [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉'
    ]
  },
  all = [].concat(soul.up, soul.down, soul.mid),
  zalgo = {};

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function is_char(character) {
    var bool = false;
    all.filter(function (i) {
      bool = (i === character);
    });
    return bool;
  }
  

  function heComes(text, options) {
    var result = '', counts, l;
    options = options || {};
    options["up"] = options["up"] || true;
    options["mid"] = options["mid"] || true;
    options["down"] = options["down"] || true;
    options["size"] = options["size"] || "maxi";
    text = text.split('');
    for (l in text) {
      if (is_char(l)) {
        continue;
      }
      result = result + text[l];
      counts = {"up" : 0, "down" : 0, "mid" : 0};
      switch (options.size) {
      case 'mini':
        counts.up = randomNumber(8);
        counts.min = randomNumber(2);
        counts.down = randomNumber(8);
        break;
      case 'maxi':
        counts.up = randomNumber(16) + 3;
        counts.min = randomNumber(4) + 1;
        counts.down = randomNumber(64) + 3;
        break;
      default:
        counts.up = randomNumber(8) + 1;
        counts.mid = randomNumber(6) / 2;
        counts.down = randomNumber(8) + 1;
        break;
      }

      var arr = ["up", "mid", "down"];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0 ; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text);
}


/***/ }),

/***/ 936:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var colors = __nccwpck_require__(595);

module['exports'] = (function() {
  return function (letter, i, exploded) {
    if(letter === " ") return letter;
    switch(i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter)
      case 2: return colors.blue(letter)
    }
  }
})();

/***/ }),

/***/ 210:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var colors = __nccwpck_require__(595);

module['exports'] = (function () {
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
  return function (letter, i, exploded) {
    if (letter === " ") {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
})();



/***/ }),

/***/ 441:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var colors = __nccwpck_require__(595);

module['exports'] = (function () {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];
  return function(letter, i, exploded) {
    return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 1))]](letter);
  };
})();

/***/ }),

/***/ 989:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var colors = __nccwpck_require__(595);

module['exports'] = function (letter, i, exploded) {
  return i % 2 === 0 ? letter : colors.inverse(letter);
};

/***/ }),

/***/ 104:
/***/ ((module) => {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49]

};

Object.keys(codes).forEach(function (key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});

/***/ }),

/***/ 662:
/***/ ((module) => {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var argv = process.argv;

module.exports = (function () {
  if (argv.indexOf('--no-color') !== -1 ||
    argv.indexOf('--color=false') !== -1) {
    return false;
  }

  if (argv.indexOf('--color') !== -1 ||
    argv.indexOf('--color=true') !== -1 ||
    argv.indexOf('--color=always') !== -1) {
    return true;
  }

  if (process.stdout && !process.stdout.isTTY) {
    return false;
  }

  if (process.platform === 'win32') {
    return true;
  }

  if ('COLORTERM' in process.env) {
    return true;
  }

  if (process.env.TERM === 'dumb') {
    return false;
  }

  if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
    return true;
  }

  return false;
})();

/***/ }),

/***/ 997:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

//
// Remark: Requiring this file will use the "safe" colors API which will not touch String.prototype
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
var colors = __nccwpck_require__(595);
module['exports'] = colors;

/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(219);


/***/ }),

/***/ 219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(808);
var tls = __nccwpck_require__(404);
var http = __nccwpck_require__(685);
var https = __nccwpck_require__(687);
var events = __nccwpck_require__(361);
var assert = __nccwpck_require__(491);
var util = __nccwpck_require__(837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(186);
const http = __nccwpck_require__(255);
const Table = __nccwpck_require__(797);

const PROCESSING_STATUS = 'Scanning';
const SCAN_INTERVAL_CHECK = 5000;
const CI_SCAN_TIMEOUT = 1000 * 60 * 15; // 15 minutes timeout
const STATUS_TIME_OUT = 'Time out';
const STATUS_PASS = 'Pass';
const STATUS_FAIL = 'Fail';
let baseUrlUI;

async function triggerScan(scanTarget) {
  core.info('Scan target: ' + scanTarget);
  const scanUrl = `${process.env.CS_SCAN_URL}/ci/scan`;
  core.debug('Scan URL: ' + scanUrl);
  const client = new http.HttpClient();
  const jsonObj = await client.postJson(
    scanUrl,
    [
      {
        scan: 'repo',
        targets: [{
          url: scanTarget,
          provider: 'github',
          branch: process.env.GITHUB_REF_NAME
        }],
      },
    ],
    {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CS_API_TOKEN,
    },
  );
  if (jsonObj.statusCode !== 200)
    return core.setFailed('Failed to trigger scan');
  if (
    jsonObj.result &&
    jsonObj.result.meta &&
    jsonObj.result.meta.statusCode === 200
  ) {
    core.info(JSON.stringify(jsonObj.result.response));
    core.info('Scan triggered successfully');
    baseUrlUI = jsonObj.result.response.baseUrl;
    return getScanResult(jsonObj.result.response.scanId);
  }
  return core.setFailed(jsonObj.result.meta.message);
}

async function getScanResult(scanId) {
  const scanUrl = `${process.env.CS_SCAN_URL}/ci/scan/${scanId}/overview`;
  const client = new http.HttpClient();
  // set interval to check scan status every 5 seconds
  // timeout in 15 minutes
  const intervalId = setInterval(async () => {
    const jsonObj = await client.getJson(scanUrl, {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CS_API_TOKEN,
    });
    if (jsonObj.statusCode !== 200)
      return core.setFailed('Failed to get scan result');
    if (
      jsonObj.result &&
      jsonObj.result.meta &&
      jsonObj.result.meta.statusCode === 200
    ) {
      core.info(JSON.stringify(jsonObj.result.response));
      if (jsonObj.result.response.status !== PROCESSING_STATUS) {
        clearInterval(intervalId);
        core.info('Scan completed');
        return summaryResult(jsonObj.result.response, scanId);
      }
      return core.info('Checking scan status...');
    }
    return core.setFailed(jsonObj.result.meta);
  }, SCAN_INTERVAL_CHECK);
  setTimeout(() => {
    clearInterval(intervalId);
    core.setFailed('Scan timeout');
    printSummary(scanId);
  }, CI_SCAN_TIMEOUT);
}

function printSummary(scanId, result = null) {
  const table = new Table({
    head: ['Scan Id', 'Critical', 'High', 'Medium', 'Low', 'Status'],
    title: 'Vulnerability Summary',
  });
  core.info(`Scan dashboard: ${baseUrlUI}/security/${scanId}/dashboard`);

  let critical = 'N/A';
  let high = 'N/A';
  let medium = 'N/A';
  let low = 'N/A';

  let status = STATUS_PASS;
  if (result === null) {
    status = STATUS_TIME_OUT;
  } else {
    if (
      result.critical === null &&
      result.high === null &&
      result.medium === null &&
      result.low === null
    ) {
      status = STATUS_FAIL;
    } else {
      critical = result.critical;
      high = result.high;
      medium = result.medium;
      low = result.low;
      if (critical > 0 && high > 0) {
        status = STATUS_FAIL;
      }
    }
  }

  table.push([scanId, critical, high, medium, low, status]);
  core.info(table);
}

function summaryResult(result, scanId) {
  if (result.status === 'Successful') {
    if (result.critical > 0) {
      core.setFailed('Scan completed with critical issues');
    }
    core.info('Scan completed successfully');
  } else {
    core.setFailed('Scan completed with issues');
  }
  printSummary(scanId, result);
  process.exit(0);
}

async function run() {
  try {
    if (!process.env.CS_SCAN_URL)
      core.setFailed('Please specify CS_SCAN_URL env');
    if (!process.env.CS_API_TOKEN)
      core.setFailed('Please specify CS_API_TOKEN env');
    const scanTarget = `${process.env.GITHUB_SERVER}/${process.env.GITHUB_REPOSITORY}`;
    return triggerScan(scanTarget);
  } catch (error) {
    core.setFailed(error);
  }
}

run();

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map