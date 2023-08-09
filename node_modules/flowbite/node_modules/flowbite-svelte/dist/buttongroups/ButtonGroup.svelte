<script>import { setContext } from 'svelte';
import { twMerge } from 'tailwind-merge';
export let size = 'md';
export let divClass = 'inline-flex rounded-lg shadow-sm';
setContext('group', { size });
</script>

<div {...$$restProps} class={twMerge(divClass, $$props.class)} role="group">
  <slot />
</div>

<!--
  @component
  ## Features
  [Go to Button Group](https://flowbite-svelte.com/docs/components/button-group)
  ## Props
  @prop size: SizeType = 'md';
  @prop divClass: string = 'inline-flex rounded-lg shadow-sm';  
-->
