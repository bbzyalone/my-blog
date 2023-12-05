import { defineCollection, z } from 'astro:content';

//原始模板
const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.array(z.string()).optional(),
	}),
});

//自定义内容集合
const myblog = defineCollection({
	// 使用schema 进行类型检查
	schema: z.object({
		title: z.string(), //标题
		description: z.string(),  //描述
		pubDate: z.coerce.date(), //创建时间
		updatedDate: z.coerce.date().optional(), //更新时间
		heroImage: z.string().optional()
	}),
});

export const collections = { blog ,myblog};
