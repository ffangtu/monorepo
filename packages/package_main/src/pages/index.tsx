import React from "react";
import styles from './index.less';
import {show} from '@packages/package_test/dist'
show()
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
