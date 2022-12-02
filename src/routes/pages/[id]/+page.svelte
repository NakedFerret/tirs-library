<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  const { page } = data;
</script>

<h1> Page #{page?.id} </h1>

<div>
  {page?.content}
</div>