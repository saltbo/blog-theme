<template>
	<div>
		<Card>
			<Toc />
			<article>
				<!-- 内容 -->
				<TContent />
				<!-- 编辑 -->
				<PageEdit />
				<!-- 版权 -->
				<Copyright />
			</article>
		</Card>
	</div>
</template>

<script>
import PageEdit from "@parent-theme/components/PageEdit.vue";
import Toc from "@theme/components/Toc.vue";
import PostMeta from "@theme/components/PostMeta.vue";
import Copyright from "@theme/components/Copyright.vue";
export default {
	components: {
		Toc,
		Copyright,
		PostMeta,
		PageEdit,
	},
	mounted() {},
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