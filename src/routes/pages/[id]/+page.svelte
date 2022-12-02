<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const { page } = data;
  const { content: sections, title } = page;
</script>

<h1> Page #{page?.id} </h1>
<h1> {title} </h1>

<div>
  {#each sections as s}
    <p>
      {s}
    </p>
  {/each}
</div>