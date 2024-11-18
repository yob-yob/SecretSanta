<script>
  import { onMount } from 'svelte';
  import SantaTable from './lib/SantaTable.svelte';
  import { createClient } from '@supabase/supabase-js'
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  let name = '';
  let done = false;
  let santas = {};
  let isAdmin = false

  async function reloadAllSantas () {
    santas = await supabase.from('santas').select('*')
  }

  onMount(async () => {
		santas = await supabase.from('santas').select('*')
    const urlParams = new URLSearchParams(window.location.search);
    isAdmin = urlParams.has('isAdmin') || false;
	});

  async function RegisterSanta () {
    const response = await supabase.from('santas').insert([{ codename: name }]).select();
    if (response.status === 409) {
      alert("Already Exists")
    } else {
      done = true
      reloadAllSantas()
    }
  }

  async function MatchSanta (santas) {
    let matchedSanta = [];
    santas.forEach(async (santa) => {
      let chosenSanta = null;

      while(chosenSanta === null || chosenSanta.id === santa.id || matchedSanta.includes(chosenSanta.id)) {
        if (matchedSanta.length === santas.length) {
          throw new Error("Error Unmatchable");
        }
        chosenSanta = santas.at(santas.length * Math.random())
      }

      matchedSanta.push(chosenSanta.id);

      const { data, error } = await supabase.from('santas').update([{ matched_santa_id: chosenSanta.id }]).eq('id', santa.id).select();
    });

    reloadAllSantas()
  }
</script>

<div class="bg-gray-100 flex flex-col items-center justify-center h-screen">
  
  <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-6">Secret Santa Form</h1>
      {#if done}
        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span class="font-medium">Success!</span> Time to buy a gift...
        </div>
      {:else}
        <div>
            <div class="mb-4">
                <label for="secretSantaName" class="block text-gray-700 text-sm font-bold mb-2">Secret Santa Name</label>
                <input type="text" id="secretSantaName" name="secretSantaName" bind:value={name} class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500">
            </div>

            <p class="text-sm text-gray-500">Do not submit multiple entry (or else you'll be buying multiple gifts. 😅)</p>

            <br>

            <button type="submit" on:click={RegisterSanta} class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600">
                Submit
            </button>
        </div>
      {/if}
  </div>

  <br><br>

  <!-- promise was fulfilled or not a Promise -->
  <SantaTable santas={santas} />
  <br>
  {#if isAdmin}
    <button type="submit" on:click={() => MatchSanta(santas.data)} class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600">
        Start Matching
    </button>
  {/if}
</div>
