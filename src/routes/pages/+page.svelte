<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const { pages } = data;

</script>


<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div>
  <h1>All Pages</h1>
  <ul>
    {#each pages as page (page.id)}
      <li>
        {page.id} : {page.content.slice(0, 50)}...
      </li>
    {/each}
  </ul>
</div>
 