 import { defineCollection, z } from 'astro:content';
 import type {MarkdownHeading} from 'astro'



//原始模板
const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});


//说明：https://stackoverflow.com/questions/75886482/check-zod-types-are-equivalent-to-a-typescript-interface
const schema1: z.ZodType<MarkdownHeading> =z.object({
	depth: z.number(),
	slug: z.string(),
	text: z.string(),
})


//自定义内容集合
const myblog = defineCollection({
	// 使用schema 进行类型检查
	schema: z.object({
		title: z.string(), //标题
		description: z.string(),  //描述
		pubDate: z.coerce.date(), //创建时间
		updatedDate: z.coerce.date().optional(), //更新时间
		heroImage: z.string().optional(),
		teststr: z.string().optional(),  //测试
		testarry: z.array(z.string()).optional(), //测试
		headings: z.array(schema1).optional(),  //文档的标题数组
		// headings: z.array(z.object({
		// 	depth: z.number(),
		// 	slug: z.string(),
		// 	text: z.string(),
		// })).optional(),
	}),
});

export const collections = { blog ,myblog};
