/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GameService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Buys cards
     * @param playerId
     * @param lobbyId
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public postGameStateBuyCards(
        playerId: '0' | '1',
        lobbyId: string,
        requestBody?: Array<string>,
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
            ready: boolean;
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
            ready: boolean;
        };
        fight?: {
            winner?: '0' | '1';
            reason?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/game_state/{lobby_id}/{player_id}/buy_cards',
            path: {
                'player_id': playerId,
                'lobby_id': lobbyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Default Response`,
            },
        });
    }
    /**
     * Ends the round
     * @param playerId
     * @param lobbyId
     * @returns any Default Response
     * @throws ApiError
     */
    public postGameStateReady(
        playerId: '0' | '1',
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
            ready: boolean;
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
            ready: boolean;
        };
        fight?: {
            winner?: '0' | '1';
            reason?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/game_state/{lobby_id}/{player_id}/ready',
            path: {
                'player_id': playerId,
                'lobby_id': lobbyId,
            },
            errors: {
                404: `Default Response`,
            },
        });
    }
    /**
     * Returns the game state
     * @param playerId
     * @param lobbyId
     * @returns any Default Response
     * @throws ApiError
     */
    public getGameState(
        playerId: '0' | '1',
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
            ready: boolean;
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
            ready: boolean;
        };
        fight?: {
            winner?: '0' | '1';
            reason?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/game_state/{lobby_id}/{player_id}',
            path: {
                'player_id': playerId,
                'lobby_id': lobbyId,
            },
            errors: {
                404: `Default Response`,
            },
        });
    }
    /**
     * Selects cards
     * @param playerId
     * @param lobbyId
     * @param requestBody
     * @returns any Default Response
     * @throws ApiError
     */
    public postGameStateSelectCards(
        playerId: '0' | '1',
        lobbyId: string,
        requestBody?: Array<string>,
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
            ready: boolean;
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
            ready: boolean;
        };
        fight?: {
            winner?: '0' | '1';
            reason?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/game_state/{lobby_id}/{player_id}/select_cards',
            path: {
                'player_id': playerId,
                'lobby_id': lobbyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Default Response`,
            },
        });
    }
}
