/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.server.module';
import * as i2 from './app.component';
import * as i3 from './app.component.ngfactory';
import * as i4 from '@angular/http';
import * as i5 from '@angular/platform-server';
import * as i6 from '@angular/common';
import * as i7 from '@angular/platform-browser';
import * as i8 from '@angular/animations/browser';
import * as i9 from '@angular/platform-browser/animations';
import * as i10 from '@angular/animations';
import * as i11 from '@angular/forms';
import * as i12 from './home/home.service';
import * as i13 from './app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(4608,i4.BrowserXhr,i5.ɵc,([] as any[])),i0.ɵmpd(4608,i4.ResponseOptions,
              i4.BaseResponseOptions,([] as any[])),i0.ɵmpd(4608,i4.XSRFStrategy,i5.ɵd,
              ([] as any[])),i0.ɵmpd(4608,i4.XHRBackend,i4.XHRBackend,[i4.BrowserXhr,
              i4.ResponseOptions,i4.XSRFStrategy]),i0.ɵmpd(4608,i4.RequestOptions,
              i4.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i4.Http,i5.ɵe,[i4.XHRBackend,
              i4.RequestOptions]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i6.NgLocalization,i6.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,
              i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,
              ([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i7.DomSanitizer,
              i7.ɵe,[i7.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i7.DomSanitizer]),
          i0.ɵmpd(4608,i7.HAMMER_GESTURE_CONFIG,i7.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i7.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i7.ɵDomEventsPlugin(p0_0),new i7.ɵKeyEventsPlugin(p1_0),new i7.ɵHammerGesturesPlugin(p2_0,
                p2_1)];
          },[i7.DOCUMENT,i7.DOCUMENT,i7.DOCUMENT,i7.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i7.EventManager,i7.EventManager,[i7.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i7.ɵDomSharedStylesHost,i7.ɵDomSharedStylesHost,[i7.DOCUMENT]),
          i0.ɵmpd(4608,i7.ɵDomRendererFactory2,i7.ɵDomRendererFactory2,[i7.EventManager,
              i7.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i5.ɵb,i5.ɵb,[i7.DOCUMENT,[2,i7.ɵTRANSITION_ID]]),
          i0.ɵmpd(6144,i7.ɵSharedStylesHost,(null as any),[i5.ɵb]),i0.ɵmpd(4608,i5.ɵServerRendererFactory2,
              i5.ɵServerRendererFactory2,[i0.NgZone,i7.DOCUMENT,i7.ɵSharedStylesHost]),
          i0.ɵmpd(4608,i8.AnimationDriver,i8.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,
              i8.ɵAnimationStyleNormalizer,i9.ɵd,([] as any[])),i0.ɵmpd(4608,i8.ɵAnimationEngine,
              i9.ɵb,[i8.AnimationDriver,i8.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,
              i0.RendererFactory2,i5.ɵa,[i5.ɵServerRendererFactory2,i8.ɵAnimationEngine,
                  i0.NgZone]),i0.ɵmpd(4352,i0.Testability,(null as any),([] as any[])),
          i0.ɵmpd(4608,i7.Meta,i7.Meta,[i7.DOCUMENT]),i0.ɵmpd(4608,i7.Title,i7.Title,
              [i7.DOCUMENT]),i0.ɵmpd(4608,i10.AnimationBuilder,i9.ɵBrowserAnimationBuilder,
              [i0.RendererFactory2]),i0.ɵmpd(4608,i11.ɵi,i11.ɵi,([] as any[])),i0.ɵmpd(4608,
              i12.HomeService,i12.HomeService,[i4.Http]),i0.ɵmpd(512,i4.HttpModule,
              i4.HttpModule,([] as any[])),i0.ɵmpd(512,i6.CommonModule,i6.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i7.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any) => {
                return [i7.ɵc(p0_0,p0_1)];
              },[[2,i7.NgProbeToken],[2,i0.NgProbeToken]]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i7.BrowserModule,i7.BrowserModule,[[3,i7.BrowserModule]]),i0.ɵmpd(512,
              i9.NoopAnimationsModule,i9.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,
              i5.ServerModule,i5.ServerModule,([] as any[])),i0.ɵmpd(512,i11.ɵba,i11.ɵba,
              ([] as any[])),i0.ɵmpd(512,i11.FormsModule,i11.FormsModule,([] as any[])),
          i0.ɵmpd(512,i13.AppModule,i13.AppModule,([] as any[])),i0.ɵmpd(512,i1.AppServerModule,
              i1.AppServerModule,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3d1dHRoaW5hbi9Xb3Jrc3BhY2UvQW5ndWxhcjIvcmF0ZG9yYS9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3d1dHRoaW5hbi9Xb3Jrc3BhY2UvQW5ndWxhcjIvcmF0ZG9yYS9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
