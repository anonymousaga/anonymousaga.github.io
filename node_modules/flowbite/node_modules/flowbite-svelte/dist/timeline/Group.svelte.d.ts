import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        timeClass?: string | undefined;
        date: Date | string;
        olClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type GroupProps = typeof __propDef.props;
export type GroupEvents = typeof __propDef.events;
export type GroupSlots = typeof __propDef.slots;
/**
 * ## Features
 * [Go to Grouped Timeline](https://flowbite-svelte.com/docs/components/timeline#Grouped_timeline)
 * - Setup
 * - Default timeline
 * - Vertical Timeline
 * - Horizontal Timeline
 * - Activity Log
 * - Grouped timeline
 * ## Props
 * @prop divClass: string;
 * @prop timeClass: string;
 * @prop date: Date | string;
 * @prop olClass: string;
 * ## Example
 * ```
 * <script>
 *   import { Group, GroupItem } from 'flowbite-svelte';
 *   let groupTimelines = [
 *     {
 *       title:
 *         '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
 *       src: '/images/profile-picture-1.webp',
 *       alt: 'alt here',
 *       href: '/',
 *       isPrivate: true,
 *       comment: '"I wanted to share a webinar zeroheight."'
 *     },
 *     {
 *       title:
 *         '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
 *       src: '/images/profile-picture-2.webp',
 *       alt: 'alt here',
 *       href: '/',
 *       isPrivate: true,
 *       comment: '"I wanted to share a webinar zeroheight."'
 *     }
 *   ];
 * </script>
 *
 * <Group date="January 13th, 2022">
 *   <GroupItem timelines={groupTimelines} />
 * </Group>
 * ```
 */
export default class Group extends SvelteComponentTyped<GroupProps, GroupEvents, GroupSlots> {
}
export {};
//# sourceMappingURL=Group.svelte.d.ts.map