<template>
	<div>
		<!-- <BookToc /> -->
		<Sidebar :items="sidebarItems">
			<template #top>
				<slot name="sidebar-top" />
			</template>
			<template #bottom>
				<slot name="sidebar-bottom" />
			</template>
		</Sidebar>

		<main class="page">
			<article>
				<!-- 内容 -->
				<TContent />
				<!-- 编辑 -->
				<PageEdit />
			</article>
		</main>
	</div>
</template>

<script>
import { resolveSidebarItems } from '@parent-theme/util'
import Sidebar from '@theme/components/Sidebar.vue'
import PageEdit from "@parent-theme/components/PageEdit.vue";
export default {
	components: {
		Sidebar,
		PageEdit,
	},
	computed: {
		sidebarItems() {
			return resolveSidebarItems(
				this.$page,
				this.$page.regularPath,
				this.$site,
				this.$localePath
			)
		},
	},
	mounted() { },
};
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl';

article
	@extend $wrapper;
	padding-bottom: 1rem;
	padding-top: 1rem;

	.title
		margin: 20px 0;
		word-break: break-word;

	.custom
		margin: 2rem 0;
		padding: 0;

	.page-edit
		padding: 1rem 0;

	@media (max-width: $MQMobile)
		padding: 1rem 2.5rem 0 1.5rem;
</style>