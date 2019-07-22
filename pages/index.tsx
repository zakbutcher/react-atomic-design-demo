import React, { Component } from 'react';
import { BaseLayout, SplitLayout } from 'layouts';
import { Tabs, FormGroup } from 'modules';
import { AnApiOfIceAndfire, leftPanel } from 'page-modules/react-atomic-design';
import { ApiProvider } from 'page-modules/react-atomic-design/api-provider';

/** React + Atomic Design Page */
class ReactAtomicDesign extends Component<{}, {}> {
  render() {
    return (
      <BaseLayout>
        {{
          pageTitle: 'An API of Ice & Fire',
          content: (
            <ApiProvider>
              <Tabs>
                <FormGroup>
                  <SplitLayout>
                    {{
                      rightPanel: <AnApiOfIceAndfire />,
                      leftPanel,
                    }}
                  </SplitLayout>
                </FormGroup>
              </Tabs>
            </ApiProvider>
          ),
        }}
      </BaseLayout>
    );
  }
}

export default ReactAtomicDesign;
