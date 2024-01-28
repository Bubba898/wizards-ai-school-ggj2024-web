/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LobbyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a lobby id
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public postLobby(
        requestBody: {
            open_ai_api_key: string;
        },
    ): CancelablePromise<{
        lobby_id: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lobby',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Joins a lobby
     * @param lobbyId
     * @returns any Default Response
     * @throws ApiError
     */
    public postLobby1(
        lobbyId: string,
    ): CancelablePromise<{
        player_0: {
            balance?: number;
            health: number;
            shop?: {
                cards: Array<{
                    name: string;
                    type: 'character' | 'component' | 'merged';
                    url?: string;
                    cost: number;
                }>;
            };
            hand?: Array<{
                name: string;
                type: 'character' | 'component' | 'merged';
                url?: string;
                cost: number;
            }>;
            selected_cards?: Array<{
                name: string;
                type: 'character' | 'component' | 'merged';
                url?: string;
                cost: number;
            }>;
            merged_card?: {
                name: string;
                type: 'character' | 'component' | 'merged';
                url?: string;
                cost: number;
            };
            amount_of_cards_in_hand?: number;
        };
        player_1: {
            balance?: number;
            health: number;
            shop?: {
                cards: Array<{
                    name: string;
                    type: 'character' | 'component' | 'merged';
                    url?: string;
                    cost: number;
                }>;
            };
            hand?: Array<{
                name: string;
                type: 'character' | 'component' | 'merged';
                url?: string;
                cost: number;
            }>;
            selected_cards?: Array<{
                name: string;
                type: 'character' | 'component' | 'merged';
                url?: string;
                cost: number;
            }>;
            merged_card?: {
                name: string;
                type: 'character' | 'component' | 'merged';
                url?: string;
                cost: number;
            };
            amount_of_cards_in_hand?: number;
        };
        fights?: Array<{
            winner?: '0' | '1';
            reason?: string;
        }>;
        next_round_in?: number;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lobby/{lobby_id}',
            path: {
                'lobby_id': lobbyId,
            },
            errors: {
                404: `Default Response`,
            },
        });
    }
}
