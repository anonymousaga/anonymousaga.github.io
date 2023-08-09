import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        icon?: boolean | undefined;
        divClass?: string | undefined;
        hrClass?: string | undefined;
        iconDivClass?: string | undefined;
        textSpanClass?: string | undefined;
        innerDivClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HrProps = typeof __propDef.props;
export type HrEvents = typeof __propDef.events;
export type HrSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Horizontal Line](https://flowbite-svelte.com/docs/typography/hr)
 * - Setup
 * - Default HR
 * - Trimmed
 * - Icon HR
 * - HR with text
 * - HR shape
 * ## Props
 * @prop icon: boolean;
 * @prop divClass: string;
 * @prop hrClass: string;
 * @prop iconDivClass: string;
 * @prop textSpanClass: string;
 * @prop innerDivClass: string;
 * ## Example
 * ```
 * <script>
 *   import { Hr, P } from 'flowbite-svelte'
 * </script>
 *
 * <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
 * <Hr class="my-8" />
 * <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
 * ```
 */
export default class Hr extends SvelteComponentTyped<HrProps, HrEvents, HrSlots> {
}
export {};
//# sourceMappingURL=Hr.svelte.d.ts.map