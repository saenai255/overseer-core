import { Overseer as overseer } from '@jeaks03/overseer/build/core/overseer';
import { basePackage } from '@jeaks03/overseer';
import { RestrictedRequisiteManager, Requisites as OriginalRequisites } from '@jeaks03/overseer/build/core/requisites';

export const Overseer = overseer;
export { Events } from '@jeaks03/overseer/build/core/events';
export { ComposedPackage } from '@jeaks03/overseer/build/core/requisites';
export const Requisites: RestrictedRequisiteManager = OriginalRequisites as RestrictedRequisiteManager

export { Resources } from '@jeaks03/overseer/build/core/resources';

export { Converter } from '@jeaks03/overseer/build/converters/converter';
export { FormDataConverter } from '@jeaks03/overseer/build/converters/form-data-converter.component';
export { JsonConverter } from '@jeaks03/overseer/build/converters/json-converter.component';
export { XWWWFormUrlEncoded } from '@jeaks03/overseer/build/converters/x-www-form-url-encoded.component';

export { Pathway } from '@jeaks03/overseer/build/decorators/pathway';
export { Requisite } from '@jeaks03/overseer/build/decorators/requisite';

export { CoreError } from '@jeaks03/overseer/build/errors/core-error';
export { HttpError } from '@jeaks03/overseer/build/errors/http-error';

export { AsyncFunction, Class, Event, EventType, MetaClass, MetaInstance, ShadowMeta, UserProvider } 
    from '@jeaks03/overseer/build/misc/custom-types';
export { MimeFinder } from '@jeaks03/overseer/build/misc/mime-finder';
import * as SR from '@jeaks03/overseer/build/misc/standard-responses';
export const StandardResponse = SR;

export { Abstracts, PathInfo, RawAbstracts } from '@jeaks03/overseer/build/routes/abstracts';
export { Response } from '@jeaks03/overseer/build/routes/response';
export { Route } from '@jeaks03/overseer/build/routes/route';
export { Router } from '@jeaks03/overseer/build/routes/router';
export { WayDetails } from '@jeaks03/overseer/build/routes/way-details';
export { LifecycleEvent, LifecycleEventType, OnInit, AfterInit } from '@jeaks03/overseer/build/decorators/lifecycle';

export { Authorizer } from '@jeaks03/overseer/build/security/authorizer.component';
export { UserDetails } from '@jeaks03/overseer/build/security/user-details';
export { AnonymousGuard } from '@jeaks03/overseer/build/security/guards/anonymous.guard';
export { AuthenticatedGuard } from '@jeaks03/overseer/build/security/guards/authenticated.guard';
export { Guard } from '@jeaks03/overseer/build/security/guards/guard';

export { Authentication } from '@jeaks03/overseer/build/security/authentications/authentication';
export { BasicAuthentication } from '@jeaks03/overseer/build/security/authentications/basic-authentication';
export { JWTAuthentication } from '@jeaks03/overseer/build/security/authentications/jwt-authentication';
export { NoAuthentication } from '@jeaks03/overseer/build/security/authentications/no-authentication';

overseer.loadPackages([basePackage]);
// Overseer.serve(8000)