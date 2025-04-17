import { AppNavBar } from '../.nuxt/components';
<template>
	<div>
		<AppNavBar />
		<main class="container">
			<slot />
		</main>
	</div>
</template>

<style>
.error {
    color:red;
}
</style>
