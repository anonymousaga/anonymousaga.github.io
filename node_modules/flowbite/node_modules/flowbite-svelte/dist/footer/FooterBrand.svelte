<script>import { twMerge } from 'tailwind-merge';
export let aClass = 'flex items-center';
export let spanClass = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
export let imgClass = 'mr-3 h-8';
export let href = '';
export let src = '';
export let alt = '';
export let name = '';
export let target = undefined;
let aCls = twMerge(aClass, $$props.classA);
let spanCls = twMerge(spanClass, $$props.classSpan);
let imgCls = twMerge(imgClass, $$props.classImg);
</script>

{#if href}
  <a {...$$restProps} {href} {target} class={aCls}>
    <img {src} class={imgCls} {alt} />
    <span class={spanCls}>{name}</span>
    <slot />
  </a>
{:else}
  <img {...$$restProps} {src} class={imgCls} {alt} />
{/if}

<!--
  @component
  ## Feature
  [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
  ## Props
  @prop aClass: string = 'flex items-center';
  @prop spanClass: string = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
  @prop imgClass: string = 'mr-3 h-8';
  @prop href: string = '';
  @prop src: string = '';
  @prop alt: string = '';
  @prop name: string = '';
  @prop target: string | undefined = undefined;
-->
