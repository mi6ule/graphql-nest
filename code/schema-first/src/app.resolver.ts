import { Inject } from "@nestjs/common";
import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from "@nestjs/graphql";
import { AppService } from "./app.service";

@Resolver('Author')
export class AppResolver {
    constructor(
        private service: AppService,
        @Inject('PUB_SUB')
        private readonly pubSub,
    ) { }

    @Query()
    async author(@Args('id', { type: () => Int }) id: number) {
        return this.service.findOneAuthor(id);
    }

    @ResolveField()
    async posts(@Parent() author) {
        const { id } = author;
        return this.service.findAllPost(id);
    }

    @Mutation()
    async voteUp(@Args({ name: 'postId', type: () => Int }) postId: number) {
        const post = this.service.voteUpById(postId);
        this.pubSub.publish('voteUpped', { voteUpped: post });
        return post;
    }

    @Subscription()
    voteUpped() {
        return this.pubSub.asyncIterator('voteUpped');
    }

}