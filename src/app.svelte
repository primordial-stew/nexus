<div class="container">
  <div class="input-field">
    <i class="material-icons prefix white-text">search</i>
    <input class="white-text" bind:this={input}>
  </div>
</div>

<script>
  import { onMount } from 'svelte'
  
  let input

  onMount(() => {
    M.Autocomplete.init(input, {
      data: {
        'Gmail': null,
        'YouTube': null
      },
      onAutocomplete: async (name) => {
        (await import(`${location}/lib/${name.toLowerCase()}.js`))
          .init()
      }
    })
  })
</script>