import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * loopback.Count
         */
        export interface LoopbackCount {
            count?: number;
        }
        /**
         * NewSite
         * (tsType: Omit<Site, 'id'>, schemaOptions: { title: 'NewSite', exclude: [ 'id' ] })
         */
        export interface NewSite {
            [name: string]: any;
            name: string;
            url: string;
            maxDepth: number;
            frequency: number;
            extractor: string;
            userId?: string;
        }
        /**
         * NewSiteInUser
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Site, 'id'>, 'userId'>, schemaOptions: { title: 'NewSiteInUser', exclude: [ 'id' ], optional: [ 'userId' ] })
         */
        export interface NewSiteInUser {
            [name: string]: any;
            name: string;
            url: string;
            maxDepth: number;
            frequency: number;
            extractor: string;
            userId?: string;
        }
        /**
         * NewUser
         * (tsType: Omit<User, 'id'>, schemaOptions: { title: 'NewUser', exclude: [ 'id' ] })
         */
        export interface NewUser {
            name: string;
            token: string;
        }
        /**
         * NewVisit
         * (tsType: Omit<Visit, 'id'>, schemaOptions: { title: 'NewVisit', exclude: [ 'id' ] })
         */
        export interface NewVisit {
            [name: string]: any;
            name: string;
            extractor: string;
            document: {
                [key: string]: any;
            };
            siteId?: string;
        }
        /**
         * NewVisitInSite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Visit, 'id'>, 'siteId'>, schemaOptions: { title: 'NewVisitInSite', exclude: [ 'id' ], optional: [ 'siteId' ] })
         */
        export interface NewVisitInSite {
            [name: string]: any;
            name: string;
            extractor: string;
            document: {
                [key: string]: any;
            };
            siteId?: string;
        }
        /**
         * PingResponse
         */
        export interface PingResponse {
            greeting?: string;
            date?: string;
            url?: string;
            headers?: {
                [name: string]: any;
                "Content-Type"?: string;
            };
        }
        /**
         * Site
         */
        export interface Site {
            [name: string]: any;
            name: string;
            url: string;
            maxDepth: number;
            frequency: number;
            extractor: string;
            id?: string;
            userId?: string;
        }
        /**
         * Site.Filter
         */
        export interface SiteFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Site.Fields
             */
            fields?: /* Site.Fields */ {
                [name: string]: any;
                name?: boolean;
                url?: boolean;
                maxDepth?: boolean;
                frequency?: boolean;
                extractor?: boolean;
                id?: boolean;
                userId?: boolean;
            } | string[];
            /**
             * Site.IncludeFilter
             */
            include?: (/* Site.IncludeFilter.Items */ SiteIncludeFilterItems | string)[];
        }
        /**
         * Site.Filter
         */
        export interface SiteFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Site.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Site.Fields
             */
            fields?: /* Site.Fields */ {
                [name: string]: any;
                name?: boolean;
                url?: boolean;
                maxDepth?: boolean;
                frequency?: boolean;
                extractor?: boolean;
                id?: boolean;
                userId?: boolean;
            } | string[];
            /**
             * Site.IncludeFilter
             */
            include?: (/* Site.IncludeFilter.Items */ SiteIncludeFilterItems | string)[];
        }
        /**
         * Site.IncludeFilter.Items
         */
        export interface SiteIncludeFilterItems {
            relation?: "visits";
            scope?: /* Site.ScopeFilter */ SiteScopeFilter;
        }
        /**
         * SitePartial
         * (tsType: Partial<Site>, schemaOptions: { partial: true })
         */
        export interface SitePartial {
            [name: string]: any;
            name?: string;
            url?: string;
            maxDepth?: number;
            frequency?: number;
            extractor?: string;
            id?: string;
            userId?: string;
        }
        /**
         * Site.ScopeFilter
         */
        export interface SiteScopeFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            where?: {
                [name: string]: any;
            };
            fields?: {
                [name: string]: any;
            } | string[];
            include?: {
                [name: string]: any;
            }[];
        }
        /**
         * SiteWithRelations
         * (tsType: SiteWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface SiteWithRelations {
            [name: string]: any;
            name: string;
            url: string;
            maxDepth: number;
            frequency: number;
            extractor: string;
            id?: string;
            userId?: string;
            visits?: /**
             * VisitWithRelations
             * (tsType: VisitWithRelations, schemaOptions: { includeRelations: true })
             */
            VisitWithRelations[];
        }
        /**
         * User
         */
        export interface User {
            name: string;
            token: string;
            id?: string;
        }
        /**
         * User.Filter
         */
        export interface UserFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * User.Fields
             */
            fields?: /* User.Fields */ {
                name?: boolean;
                token?: boolean;
                id?: boolean;
            } | ("name" | "token" | "id")[];
            /**
             * User.IncludeFilter
             */
            include?: (/* User.IncludeFilter.Items */ UserIncludeFilterItems | string)[];
        }
        /**
         * User.Filter
         */
        export interface UserFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * User.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * User.Fields
             */
            fields?: /* User.Fields */ {
                name?: boolean;
                token?: boolean;
                id?: boolean;
            } | ("name" | "token" | "id")[];
            /**
             * User.IncludeFilter
             */
            include?: (/* User.IncludeFilter.Items */ UserIncludeFilterItems | string)[];
        }
        /**
         * User.IncludeFilter.Items
         */
        export interface UserIncludeFilterItems {
            relation?: "sites";
            scope?: /* User.ScopeFilter */ UserScopeFilter;
        }
        /**
         * UserPartial
         * (tsType: Partial<User>, schemaOptions: { partial: true })
         */
        export interface UserPartial {
            name?: string;
            token?: string;
            id?: string;
        }
        /**
         * User.ScopeFilter
         */
        export interface UserScopeFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            where?: {
                [name: string]: any;
            };
            fields?: {
                [name: string]: any;
            } | string[];
            include?: {
                [name: string]: any;
            }[];
        }
        /**
         * UserWithRelations
         * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface UserWithRelations {
            name: string;
            token: string;
            id?: string;
            sites?: /**
             * SiteWithRelations
             * (tsType: SiteWithRelations, schemaOptions: { includeRelations: true })
             */
            SiteWithRelations[];
        }
        /**
         * Visit
         */
        export interface Visit {
            [name: string]: any;
            name: string;
            extractor: string;
            document: {
                [key: string]: any;
            };
            id?: string;
            siteId?: string;
        }
        /**
         * Visit.Filter
         */
        export interface VisitFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Visit.Fields
             */
            fields?: /* Visit.Fields */ {
                [name: string]: any;
                name?: boolean;
                extractor?: boolean;
                document?: boolean;
                id?: boolean;
                siteId?: boolean;
            } | string[];
        }
        /**
         * Visit.Filter
         */
        export interface VisitFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Visit.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Visit.Fields
             */
            fields?: /* Visit.Fields */ {
                [name: string]: any;
                name?: boolean;
                extractor?: boolean;
                document?: boolean;
                id?: boolean;
                siteId?: boolean;
            } | string[];
        }
        /**
         * VisitPartial
         * (tsType: Partial<Visit>, schemaOptions: { partial: true })
         */
        export interface VisitPartial {
            [name: string]: any;
            name?: string;
            extractor?: string;
            document?: {
                [key: string]: any;
            };
            id?: string;
            siteId?: string;
        }
        /**
         * VisitWithRelations
         * (tsType: VisitWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface VisitWithRelations {
            [name: string]: any;
            name: string;
            extractor: string;
            document: {
                [key: string]: any;
            };
            id?: string;
            siteId?: string;
        }
    }
}
declare namespace Paths {
    namespace PingControllerGreet {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace PingControllerPing {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace SiteControllerCount {
        namespace Parameters {
            /**
             * Site.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Site.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SiteControllerCreate {
        export type RequestBody = /**
         * NewSite
         * (tsType: Omit<Site, 'id'>, schemaOptions: { title: 'NewSite', exclude: [ 'id' ] })
         */
        Components.Schemas.NewSite;
        namespace Responses {
            export type $200 = /* Site */ Components.Schemas.Site;
        }
    }
    namespace SiteControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Site DELETE success
             */
            export type $204 = any;
        }
    }
    namespace SiteControllerFind {
        namespace Parameters {
            export type Filter = /* Site.Filter */ Components.Schemas.SiteFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SiteWithRelations
             * (tsType: SiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SiteWithRelations[];
        }
    }
    namespace SiteControllerFindById {
        namespace Parameters {
            export type Filter = /* Site.Filter */ Components.Schemas.SiteFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SiteWithRelations
             * (tsType: SiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SiteWithRelations;
        }
    }
    namespace SiteControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Site */ Components.Schemas.Site;
        namespace Responses {
            /**
             * Site PUT success
             */
            export type $204 = any;
        }
    }
    namespace SiteControllerUpdateAll {
        namespace Parameters {
            /**
             * Site.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Site.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SitePartial
         * (tsType: Partial<Site>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SiteControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * SitePartial
         * (tsType: Partial<Site>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitePartial;
        namespace Responses {
            /**
             * Site PATCH success
             */
            export type $204 = any;
        }
    }
    namespace SiteVisitControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewVisitInSite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Visit, 'id'>, 'siteId'>, schemaOptions: { title: 'NewVisitInSite', exclude: [ 'id' ], optional: [ 'siteId' ] })
         */
        Components.Schemas.NewVisitInSite;
        namespace Responses {
            export type $200 = /* Visit */ Components.Schemas.Visit;
        }
    }
    namespace SiteVisitControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Visit.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Visit.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SiteVisitControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Visit */ Components.Schemas.Visit[];
        }
    }
    namespace SiteVisitControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Visit.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Visit.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * VisitPartial
         * (tsType: Partial<Visit>, schemaOptions: { partial: true })
         */
        Components.Schemas.VisitPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UserControllerCount {
        namespace Parameters {
            /**
             * User.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* User.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UserControllerCreate {
        export type RequestBody = /**
         * NewUser
         * (tsType: Omit<User, 'id'>, schemaOptions: { title: 'NewUser', exclude: [ 'id' ] })
         */
        Components.Schemas.NewUser;
        namespace Responses {
            export type $200 = /* User */ Components.Schemas.User;
        }
    }
    namespace UserControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * User DELETE success
             */
            export type $204 = any;
        }
    }
    namespace UserControllerFind {
        namespace Parameters {
            export type Filter = /* User.Filter */ Components.Schemas.UserFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * UserWithRelations
             * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.UserWithRelations[];
        }
    }
    namespace UserControllerFindById {
        namespace Parameters {
            export type Filter = /* User.Filter */ Components.Schemas.UserFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * UserWithRelations
             * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.UserWithRelations;
        }
    }
    namespace UserControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* User */ Components.Schemas.User;
        namespace Responses {
            /**
             * User PUT success
             */
            export type $204 = any;
        }
    }
    namespace UserControllerUpdateAll {
        namespace Parameters {
            /**
             * User.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* User.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * UserPartial
         * (tsType: Partial<User>, schemaOptions: { partial: true })
         */
        Components.Schemas.UserPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UserControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * UserPartial
         * (tsType: Partial<User>, schemaOptions: { partial: true })
         */
        Components.Schemas.UserPartial;
        namespace Responses {
            /**
             * User PATCH success
             */
            export type $204 = any;
        }
    }
    namespace UserSiteControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewSiteInUser
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Site, 'id'>, 'userId'>, schemaOptions: { title: 'NewSiteInUser', exclude: [ 'id' ], optional: [ 'userId' ] })
         */
        Components.Schemas.NewSiteInUser;
        namespace Responses {
            export type $200 = /* Site */ Components.Schemas.Site;
        }
    }
    namespace UserSiteControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Site.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Site.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UserSiteControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Site */ Components.Schemas.Site[];
        }
    }
    namespace UserSiteControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Site.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Site.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SitePartial
         * (tsType: Partial<Site>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace VisiteControllerCount {
        namespace Parameters {
            /**
             * Visit.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Visit.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace VisiteControllerCreate {
        export type RequestBody = /**
         * NewVisit
         * (tsType: Omit<Visit, 'id'>, schemaOptions: { title: 'NewVisit', exclude: [ 'id' ] })
         */
        Components.Schemas.NewVisit;
        namespace Responses {
            export type $200 = /* Visit */ Components.Schemas.Visit;
        }
    }
    namespace VisiteControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Visit DELETE success
             */
            export type $204 = any;
        }
    }
    namespace VisiteControllerFind {
        namespace Parameters {
            export type Filter = /* Visit.Filter */ Components.Schemas.VisitFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * VisitWithRelations
             * (tsType: VisitWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.VisitWithRelations[];
        }
    }
    namespace VisiteControllerFindById {
        namespace Parameters {
            export type Filter = /* Visit.Filter */ Components.Schemas.VisitFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * VisitWithRelations
             * (tsType: VisitWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.VisitWithRelations;
        }
    }
    namespace VisiteControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Visit */ Components.Schemas.Visit;
        namespace Responses {
            /**
             * Visit PUT success
             */
            export type $204 = any;
        }
    }
    namespace VisiteControllerUpdateAll {
        namespace Parameters {
            /**
             * Visit.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Visit.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * VisitPartial
         * (tsType: Partial<Visit>, schemaOptions: { partial: true })
         */
        Components.Schemas.VisitPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace VisiteControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * VisitPartial
         * (tsType: Partial<Visit>, schemaOptions: { partial: true })
         */
        Components.Schemas.VisitPartial;
        namespace Responses {
            /**
             * Visit PATCH success
             */
            export type $204 = any;
        }
    }
}

export interface OperationMethods {
  /**
   * PingController.greet
   */
  'PingController.greet'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  /**
   * PingController.ping
   */
  'PingController.ping'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  /**
   * SiteController.count
   */
  'SiteController.count'(
    parameters?: Parameters<Paths.SiteControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerCount.Responses.$200>
  /**
   * SiteVisitController.find
   */
  'SiteVisitController.find'(
    parameters?: Parameters<Paths.SiteVisitControllerFind.PathParameters & Paths.SiteVisitControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteVisitControllerFind.Responses.$200>
  /**
   * SiteVisitController.create
   */
  'SiteVisitController.create'(
    parameters?: Parameters<Paths.SiteVisitControllerCreate.PathParameters> | null,
    data?: Paths.SiteVisitControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteVisitControllerCreate.Responses.$200>
  /**
   * SiteVisitController.patch
   */
  'SiteVisitController.patch'(
    parameters?: Parameters<Paths.SiteVisitControllerPatch.PathParameters & Paths.SiteVisitControllerPatch.QueryParameters> | null,
    data?: Paths.SiteVisitControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteVisitControllerPatch.Responses.$200>
  /**
   * SiteVisitController.delete
   */
  'SiteVisitController.delete'(
    parameters?: Parameters<Paths.SiteVisitControllerDelete.PathParameters & Paths.SiteVisitControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteVisitControllerDelete.Responses.$200>
  /**
   * SiteController.findById
   */
  'SiteController.findById'(
    parameters?: Parameters<Paths.SiteControllerFindById.PathParameters & Paths.SiteControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerFindById.Responses.$200>
  /**
   * SiteController.replaceById
   */
  'SiteController.replaceById'(
    parameters?: Parameters<Paths.SiteControllerReplaceById.PathParameters> | null,
    data?: Paths.SiteControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerReplaceById.Responses.$204>
  /**
   * SiteController.updateById
   */
  'SiteController.updateById'(
    parameters?: Parameters<Paths.SiteControllerUpdateById.PathParameters> | null,
    data?: Paths.SiteControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerUpdateById.Responses.$204>
  /**
   * SiteController.deleteById
   */
  'SiteController.deleteById'(
    parameters?: Parameters<Paths.SiteControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerDeleteById.Responses.$204>
  /**
   * SiteController.find
   */
  'SiteController.find'(
    parameters?: Parameters<Paths.SiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerFind.Responses.$200>
  /**
   * SiteController.create
   */
  'SiteController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerCreate.Responses.$200>
  /**
   * SiteController.updateAll
   */
  'SiteController.updateAll'(
    parameters?: Parameters<Paths.SiteControllerUpdateAll.QueryParameters> | null,
    data?: Paths.SiteControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerUpdateAll.Responses.$200>
  /**
   * UserController.count
   */
  'UserController.count'(
    parameters?: Parameters<Paths.UserControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerCount.Responses.$200>
  /**
   * UserSiteController.find
   */
  'UserSiteController.find'(
    parameters?: Parameters<Paths.UserSiteControllerFind.PathParameters & Paths.UserSiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserSiteControllerFind.Responses.$200>
  /**
   * UserSiteController.create
   */
  'UserSiteController.create'(
    parameters?: Parameters<Paths.UserSiteControllerCreate.PathParameters> | null,
    data?: Paths.UserSiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserSiteControllerCreate.Responses.$200>
  /**
   * UserSiteController.patch
   */
  'UserSiteController.patch'(
    parameters?: Parameters<Paths.UserSiteControllerPatch.PathParameters & Paths.UserSiteControllerPatch.QueryParameters> | null,
    data?: Paths.UserSiteControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserSiteControllerPatch.Responses.$200>
  /**
   * UserSiteController.delete
   */
  'UserSiteController.delete'(
    parameters?: Parameters<Paths.UserSiteControllerDelete.PathParameters & Paths.UserSiteControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserSiteControllerDelete.Responses.$200>
  /**
   * UserController.findById
   */
  'UserController.findById'(
    parameters?: Parameters<Paths.UserControllerFindById.PathParameters & Paths.UserControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerFindById.Responses.$200>
  /**
   * UserController.replaceById
   */
  'UserController.replaceById'(
    parameters?: Parameters<Paths.UserControllerReplaceById.PathParameters> | null,
    data?: Paths.UserControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerReplaceById.Responses.$204>
  /**
   * UserController.updateById
   */
  'UserController.updateById'(
    parameters?: Parameters<Paths.UserControllerUpdateById.PathParameters> | null,
    data?: Paths.UserControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerUpdateById.Responses.$204>
  /**
   * UserController.deleteById
   */
  'UserController.deleteById'(
    parameters?: Parameters<Paths.UserControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerDeleteById.Responses.$204>
  /**
   * UserController.find
   */
  'UserController.find'(
    parameters?: Parameters<Paths.UserControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerFind.Responses.$200>
  /**
   * UserController.create
   */
  'UserController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UserControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerCreate.Responses.$200>
  /**
   * UserController.updateAll
   */
  'UserController.updateAll'(
    parameters?: Parameters<Paths.UserControllerUpdateAll.QueryParameters> | null,
    data?: Paths.UserControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerUpdateAll.Responses.$200>
  /**
   * VisiteController.count
   */
  'VisiteController.count'(
    parameters?: Parameters<Paths.VisiteControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerCount.Responses.$200>
  /**
   * VisiteController.findById
   */
  'VisiteController.findById'(
    parameters?: Parameters<Paths.VisiteControllerFindById.PathParameters & Paths.VisiteControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerFindById.Responses.$200>
  /**
   * VisiteController.replaceById
   */
  'VisiteController.replaceById'(
    parameters?: Parameters<Paths.VisiteControllerReplaceById.PathParameters> | null,
    data?: Paths.VisiteControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerReplaceById.Responses.$204>
  /**
   * VisiteController.updateById
   */
  'VisiteController.updateById'(
    parameters?: Parameters<Paths.VisiteControllerUpdateById.PathParameters> | null,
    data?: Paths.VisiteControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerUpdateById.Responses.$204>
  /**
   * VisiteController.deleteById
   */
  'VisiteController.deleteById'(
    parameters?: Parameters<Paths.VisiteControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerDeleteById.Responses.$204>
  /**
   * VisiteController.find
   */
  'VisiteController.find'(
    parameters?: Parameters<Paths.VisiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerFind.Responses.$200>
  /**
   * VisiteController.create
   */
  'VisiteController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.VisiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerCreate.Responses.$200>
  /**
   * VisiteController.updateAll
   */
  'VisiteController.updateAll'(
    parameters?: Parameters<Paths.VisiteControllerUpdateAll.QueryParameters> | null,
    data?: Paths.VisiteControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VisiteControllerUpdateAll.Responses.$200>
}

export interface PathsDictionary {
  ['/greet']: {
    /**
     * PingController.greet
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  }
  ['/ping']: {
    /**
     * PingController.ping
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  }
  ['/sites/count']: {
    /**
     * SiteController.count
     */
    'get'(
      parameters?: Parameters<Paths.SiteControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerCount.Responses.$200>
  }
  ['/sites/{id}/visits']: {
    /**
     * SiteVisitController.create
     */
    'post'(
      parameters?: Parameters<Paths.SiteVisitControllerCreate.PathParameters> | null,
      data?: Paths.SiteVisitControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteVisitControllerCreate.Responses.$200>
    /**
     * SiteVisitController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.SiteVisitControllerPatch.PathParameters & Paths.SiteVisitControllerPatch.QueryParameters> | null,
      data?: Paths.SiteVisitControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteVisitControllerPatch.Responses.$200>
    /**
     * SiteVisitController.find
     */
    'get'(
      parameters?: Parameters<Paths.SiteVisitControllerFind.PathParameters & Paths.SiteVisitControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteVisitControllerFind.Responses.$200>
    /**
     * SiteVisitController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.SiteVisitControllerDelete.PathParameters & Paths.SiteVisitControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteVisitControllerDelete.Responses.$200>
  }
  ['/sites/{id}']: {
    /**
     * SiteController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.SiteControllerReplaceById.PathParameters> | null,
      data?: Paths.SiteControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerReplaceById.Responses.$204>
    /**
     * SiteController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.SiteControllerUpdateById.PathParameters> | null,
      data?: Paths.SiteControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerUpdateById.Responses.$204>
    /**
     * SiteController.findById
     */
    'get'(
      parameters?: Parameters<Paths.SiteControllerFindById.PathParameters & Paths.SiteControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerFindById.Responses.$200>
    /**
     * SiteController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.SiteControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerDeleteById.Responses.$204>
  }
  ['/sites']: {
    /**
     * SiteController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerCreate.Responses.$200>
    /**
     * SiteController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.SiteControllerUpdateAll.QueryParameters> | null,
      data?: Paths.SiteControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerUpdateAll.Responses.$200>
    /**
     * SiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.SiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerFind.Responses.$200>
  }
  ['/users/count']: {
    /**
     * UserController.count
     */
    'get'(
      parameters?: Parameters<Paths.UserControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerCount.Responses.$200>
  }
  ['/users/{id}/sites']: {
    /**
     * UserSiteController.create
     */
    'post'(
      parameters?: Parameters<Paths.UserSiteControllerCreate.PathParameters> | null,
      data?: Paths.UserSiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserSiteControllerCreate.Responses.$200>
    /**
     * UserSiteController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.UserSiteControllerPatch.PathParameters & Paths.UserSiteControllerPatch.QueryParameters> | null,
      data?: Paths.UserSiteControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserSiteControllerPatch.Responses.$200>
    /**
     * UserSiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.UserSiteControllerFind.PathParameters & Paths.UserSiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserSiteControllerFind.Responses.$200>
    /**
     * UserSiteController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.UserSiteControllerDelete.PathParameters & Paths.UserSiteControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserSiteControllerDelete.Responses.$200>
  }
  ['/users/{id}']: {
    /**
     * UserController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.UserControllerReplaceById.PathParameters> | null,
      data?: Paths.UserControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerReplaceById.Responses.$204>
    /**
     * UserController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.UserControllerUpdateById.PathParameters> | null,
      data?: Paths.UserControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerUpdateById.Responses.$204>
    /**
     * UserController.findById
     */
    'get'(
      parameters?: Parameters<Paths.UserControllerFindById.PathParameters & Paths.UserControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerFindById.Responses.$200>
    /**
     * UserController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.UserControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerDeleteById.Responses.$204>
  }
  ['/users']: {
    /**
     * UserController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UserControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerCreate.Responses.$200>
    /**
     * UserController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.UserControllerUpdateAll.QueryParameters> | null,
      data?: Paths.UserControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerUpdateAll.Responses.$200>
    /**
     * UserController.find
     */
    'get'(
      parameters?: Parameters<Paths.UserControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerFind.Responses.$200>
  }
  ['/visits/count']: {
    /**
     * VisiteController.count
     */
    'get'(
      parameters?: Parameters<Paths.VisiteControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerCount.Responses.$200>
  }
  ['/visits/{id}']: {
    /**
     * VisiteController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.VisiteControllerReplaceById.PathParameters> | null,
      data?: Paths.VisiteControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerReplaceById.Responses.$204>
    /**
     * VisiteController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.VisiteControllerUpdateById.PathParameters> | null,
      data?: Paths.VisiteControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerUpdateById.Responses.$204>
    /**
     * VisiteController.findById
     */
    'get'(
      parameters?: Parameters<Paths.VisiteControllerFindById.PathParameters & Paths.VisiteControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerFindById.Responses.$200>
    /**
     * VisiteController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.VisiteControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerDeleteById.Responses.$204>
  }
  ['/visits']: {
    /**
     * VisiteController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.VisiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerCreate.Responses.$200>
    /**
     * VisiteController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.VisiteControllerUpdateAll.QueryParameters> | null,
      data?: Paths.VisiteControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerUpdateAll.Responses.$200>
    /**
     * VisiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.VisiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VisiteControllerFind.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
