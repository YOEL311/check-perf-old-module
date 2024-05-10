
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTestOldModuleSpec.h"

@interface TestOldModule : NSObject <NativeTestOldModuleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface TestOldModule : NSObject <RCTBridgeModule>
#endif

@end
