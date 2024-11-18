<script>
  import { createClient } from '@supabase/supabase-js'
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  let name = '';
  let done = false;

  async function RegisterSanta () {
    const { data, error } = await supabase.from('santas').insert([{ codename: name }]);
    if (error === null) {
      done = true
      alert('Codename Submitted')
    } else {
      alert(error.details)
    }
    name = '';
  }

  function filterById(jsonObject, id) {
    return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];
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
        <form>
            <div class="mb-4">
                <label for="secretSantaName" class="block text-gray-700 text-sm font-bold mb-2">Secret Santa Name</label>
                <input type="text" id="secretSantaName" name="secretSantaName" bind:value={name} class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500">
            </div>

            <p class="text-sm text-gray-500">Do not submit multiple entry (or else you'll be buying multiple gifts. 😅)</p>

            <br>

            <button type="submit" on:click={RegisterSanta} class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600">
                Submit
            </button>
        </form>
      {/if}
  </div>

  <br><br>

  {#await supabase.from('santas').select('*')}
	<!-- promise is pending -->
    <p>Gathering all santa...</p>
  {:then santas}
    <!-- promise was fulfilled or not a Promise -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Santa Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Match Santa
                  </th>
              </tr>
          </thead>
          <tbody>
            {#each santas.data as santa, index}
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {santa.codename}
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {filterById(santas.data, santa.matched_santa_id).codename}
                </th>
              </tr>
            {/each}
          </tbody>
      </table>
    </div>
    <br>
    <button type="submit" on:click={() => MatchSanta(santas.data)} class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600">
        Start Matching
    </button>
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
