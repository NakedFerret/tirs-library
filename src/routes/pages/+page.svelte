<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const { pages } = data;

</script>


<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<h1>All Pages</h1>
<div class="">
  
  {#each pages as page (page.id)}
    <div class="pv2 bt flex">
      <div class="w-80">{page.content.slice(0, 500)}</div>
      <div class="w-20 ml3">
        <a class="f4" href="/pages/{page.id}">Open Page #{page.id}</a>
      </div>
    </div>
  {/each}
</div>
 