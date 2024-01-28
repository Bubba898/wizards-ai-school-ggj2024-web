// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare global {
  declare namespace App {
    export interface Error {
      status?: number;
      message: string;
      stack?: string;
      detail?: string;
      name: string
    }

    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}


declare module '~icons/*' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import { FunctionalComponent, SVGAttributes } from 'svelte'
  const component: FunctionalComponent
  export default component
}

export {};
