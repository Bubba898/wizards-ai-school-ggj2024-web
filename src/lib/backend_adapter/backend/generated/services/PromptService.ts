/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PromptService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Uses TTS to generate audio from text
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public postPromptAudio(
        requestBody: {
            prompt: string;
            lobby_id: string;
        },
    ): CancelablePromise<{
        audioUrl: string;
        executionTimeMs: number;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/promptAudio',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Asks DALL-E to generate an image
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public postPromptImage(
        requestBody: {
            prompt: string;
            lobby_id: string;
        },
    ): CancelablePromise<{
        dalleResponseUrl: string;
        executionTimeMs: number;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/promptImage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Asks Chat GPT using format type Json
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public postPromptJson(
        requestBody: {
            prompt: string;
            lobby_id: string;
        },
    ): CancelablePromise<{
        gptResponse: string;
        executionTimeMs: number;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/promptJson',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
