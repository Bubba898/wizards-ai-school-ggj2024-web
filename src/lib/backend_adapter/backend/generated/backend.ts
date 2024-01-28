/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { GameService } from './services/GameService';
import { LobbyService } from './services/LobbyService';
import { PingService } from './services/PingService';
import { PromptService } from './services/PromptService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class backend {
    public readonly game: GameService;
    public readonly lobby: LobbyService;
    public readonly ping: PingService;
    public readonly prompt: PromptService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? 'AI need no version',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.game = new GameService(this.request);
        this.lobby = new LobbyService(this.request);
        this.ping = new PingService(this.request);
        this.prompt = new PromptService(this.request);
    }
}

