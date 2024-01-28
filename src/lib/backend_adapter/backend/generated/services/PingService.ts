/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a Pong
     * @param ping
     * @returns any Default Response
     * @throws ApiError
     */
    public getPing(
        ping: string,
    ): CancelablePromise<{
        pong: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ping/{ping}',
            path: {
                'ping': ping,
            },
        });
    }
}
