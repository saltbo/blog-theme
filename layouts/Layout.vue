<template>
	<BaseLayout>
		<div id="default-layout">
			<Card>
				<TContent />
			</Card>

			<Card class="mt-5 px-10" v-if="$page.frontmatter.comment">
				<Disqusjs />
			</Card>
		</div>
		</BaseLayout>
</template>

<script>
export default {
	components: {},
	computed: {},
	methods: {},
	mounted() { },
};
</script>

<style lang="stylus" scoped></style>