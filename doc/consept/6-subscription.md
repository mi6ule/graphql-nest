## Subscription
##### step 1:
install graphql subscription package:
```bash
yarn add graphql-subscriptions
```

##### step 2:
add subscription options in config:
```json
{
	"installSubscriptionHandlers": true,
	"subscriptions": {
		"subscriptions-transport-ws": {
			"path": "/graphql", // path of subscription server
		},
	}
}
```

#### step 3:
add pub-sub to module provider:
```typescript
import { PubSub } from 'graphql-subscriptions';

export const graphqlProviders = [
	{
		provide: 'PUB_SUB',
		useValue: new PubSub(),
	}
 ]
```

#### step 4:
inject pub-sub to resolver class:
```typescript
@Inject('PUB_SUB')
private readonly pubSub
```

#### step 5:
add publisher into code (exp: mutation):
```typescript
this.pubSub.publish('create.hero', { heroAdded: data });
```

#### step 6:
add subscription to resolver:
```typescript
@Subscription((returns) => HeroType, {
	name: 'heroAdded',
})
faqAdded() {
	return this.pubSub.asyncIterator('heroAdded');
}
```