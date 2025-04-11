goog.provide('re_com.nested_v_grid');
re_com.nested_v_grid.cell_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-path","row-path",-709648669)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-path","column-path",-733367618)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"children","children",-940561982)], null)], null);
re_com.nested_v_grid.part_structure = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","wrapper","re-com.nested-v-grid/wrapper",-616776584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header-grid","re-com.nested-v-grid/corner-header-grid",35380063),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header-grid","re-com.nested-v-grid/row-header-grid",254331951),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header-label","re-com.nested-v-grid/row-header-label",-135104611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.row_header_label], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header-grid","re-com.nested-v-grid/column-header-grid",2008839869),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header-label","re-com.nested-v-grid/column-header-label",-1851560330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.column_header_label], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","cell-grid","re-com.nested-v-grid/cell-grid",1481952793),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true,new cljs.core.Keyword(null,"args-desc","args-desc",1950738510),re_com.nested_v_grid.cell_args_desc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","cell-label","re-com.nested-v-grid/cell-label",-2129008445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null)], null);
re_com.nested_v_grid.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.nested_v_grid.part_structure):null);
re_com.nested_v_grid.part_names = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.nested_v_grid.parts_desc)):null);
re_com.nested_v_grid.args_desc = (function (){var special_args = new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-tree","row-tree",687483819),new cljs.core.Keyword(null,"default","default",-1987822328),"[]",new cljs.core.Keyword(null,"type","type",1174270348),"vector of row-specs or (nested) row-trees",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-tree","column-tree",841938146),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of column-specs or (nested) column-trees",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-tree-depth","row-tree-depth",-1290478766),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Necessary to lay out the headers. Since ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," only traverses the visible part of each  header-tree, it cannot know ","how deep the entire tree is. When the deepest part of the tree is not visible, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," still needs to display a large enough grid area ","in the headers, so there is a place for it when it enters the view."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-tree-depth","column-tree-depth",-607656054),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Necessary to lay out the headers. Since ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," only traverses the visible part of each  header-tree, it cannot know ","how deep the entire tree is. When the deepest part of the tree is not visible, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," still needs to display a large enough grid area ","in the headers, so there is a place for it when it enters the view."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(20),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default main-axis size (i.e. height) of every row. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," overrides this size when a user resizes a row, ","or when the corresponding row-spec contains a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":size"], null)," key."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-width","column-width",405119380),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(40),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default main-axis size (i.e. width) of every column. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," overrides this size when a user resizes a column, ","or when the corresponding column-spec contains a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":size"], null)," key."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(20),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default cross-axis size (i.e. width) of every column-header."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(40),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default cross-axis size (i.e. width) of every column-header."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642),new cljs.core.Keyword(null,"type","type",1174270348),"vector of integers | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.integer_QMARK_),re_com.util.deref_or_value_peek),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each integer corresponds to a level of nesting in the header-tree, ","Controlling the cross-axis size of every header at that level. ","Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"row-header-width"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439),new cljs.core.Keyword(null,"type","type",1174270348),"vector of integers | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.integer_QMARK_),re_com.util.deref_or_value_peek),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each integer corresponds to a level of nesting in the header-tree, ","Controlling the cross-axis size of every header at that level.","Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"column-header-height"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-row-branches?","show-row-branches?",1970508230),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displays a row of cells for every ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-path"], null),", not just those at the leaves of the tree. ","If a header has children, its path is a branch-path.","Otherwise, its path is a leaf-path.","For instance, the tree ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a [:b [:c]]]"], null)," has one leaf path ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a :b :c]"], null)," and two branch paths ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a] [:a :b]"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-column-branches?","show-column-branches?",2070603327),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displays a row of cells for every ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-path"], null),", not just those at the leaves of the tree. ","If a header has children, its path is a branch-path.","Otherwise, its path is a leaf-path.","For instance, the tree ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a [:b [:c]]]"], null)," has one leaf path ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a :b [:c]]"], null)," and two branch paths ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a] [:a :b]"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", hides the root of each header-tree, and excludes that root-header ","from the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-path"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-path"], null)," props ","which ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":nested-grid"], null),"passes to various parts. ","Each header-tree has a single header at its root ","(its children make up the rest of the tree).","In many cases, this root-header is not interesting to the user, so offer this prop to hide it."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-init-export-fn","on-init-export-fn",2043615548),new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," calls this function once at mount-time, passing it an ","export function. We recommend storing the export function in an r/atom. ","This export function composes your passed-in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export-*"], null)," functions, which are required ","for this export function to work."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export","on-export",1803619391),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Called whenever the export button is clicked. ","Can expect to be passed several keyword arguments. ","Each argument is a 2-dimensional vector of strings.",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":rows"], null)], null),": ","The entire grid laid out in rows."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cells"], null)], null),": ","Just the cells, without any headers."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":corner-headers"], null)], null),": ","Just the spacers in the top-left corner."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-headers"], null)], null),": ","Just the row headers"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-headers"], null)], null),": ","Just the column headers"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cell"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps "," this function over the cells, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the row-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the column-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path corner-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":corner-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the corner-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null),"'s most difficult tasks are deriving paths from header-trees ","and rendering cells at each path intersection. Their complexity is proportional to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(* (size row-tree) (size column-tree))"], null),". ","When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":virtualize?"], null)," is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," does all the work on each render. ","As long as nothing triggers a re-render, this is fine. Scrolling does not trigger a re-render. ","That means scrolling is very smooth, but resizing, changing or moving a row or column ","could be painfully slow. When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":virtualize?"], null)," is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," relies on a cached traversal. It still traverses both trees at mount time, ","But subsequent traversals are much faster. Rendering is faster as well, only running ","for the cells which appear in the visible scroll area. Scrolling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"does"], null)," trigger a re-render, "," mounting any cells which enter the scroll area, and unmounting those which exit. ","That means scrolling may not be quite as smooth, but overall performance (e.g. resizing) ","can be better, especially for very large trees with millions of paths"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"theme-cells?","theme-cells?",129212611),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Improves performance by disabling the theme system on the following-parts: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-header"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cell"], null)], null)], null),"Those parts will not be passed any props other than row-path & column-path.","To style these parts, we recommend using css to target the descendents of container parts, such as ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header-grid"], null),". This is currently done in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"re-com.css"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize?","resize?",459924349),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across all row & column boundaries. ","This can be overridden by the other ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":resize-*?"], null)," props. ","NOTE: For a row or column to be resizable along its main axis, its spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-row-height?","resize-row-height?",1988704991),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the main-axis dimension of row headers. ","NOTE: For a row-header to be resizable, its row-spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-column-header-height?","resize-column-header-height?",-478677866),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the cross-axis dimension of column headers."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-row-header-height?","resize-row-header-height?",-801316514),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the main-axis dimension of rows. ","NOTE: For a row to be resizable, its row-spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-column-width?","resize-column-width?",-1090814270),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the cross-axis dimension of columns.","NOTE: For a column to be resizable, its column-spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"default","default",-1987822328),"internal fn",new cljs.core.Keyword(null,"description","description",-1428560544),"TBD"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Applies to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":wrapper"], null)," part."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Applies to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":wrapper"], null)," part."], null)], null)], null);
if(re_com.config.include_args_desc_QMARK_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(special_args,re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.nested_v_grid.part_structure)], 0)));
} else {
return null;
}
})();
re_com.nested_v_grid.safe_assoc = (function re_com$nested_v_grid$safe_assoc(v,idx,val){
if((idx < cljs.core.count(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,idx,val);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((idx - cljs.core.count(v)),null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null));
}
});
re_com.nested_v_grid.nested_v_grid = (function re_com$nested_v_grid$nested_v_grid(p__16728){
var map__16730 = p__16728;
var map__16730__$1 = cljs.core.__destructure_map(map__16730);
var row_header_widths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var on_export_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067));
var on_init_export_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"on-init-export-fn","on-init-export-fn",2043615548));
var column_header_heights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439));
var show_column_branches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"show-column-branches?","show-column-branches?",2070603327));
var on_export = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16730__$1,new cljs.core.Keyword(null,"on-export","on-export",1803619391),(function re_com$nested_v_grid$nested_v_grid_$_on_export(p__16732){
var map__16736 = p__16732;
var map__16736__$1 = cljs.core.__destructure_map(map__16736);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16736__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return re_com.util.clipboard_write_BANG_(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.tsv_line,rows)));
}));
var column_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"column-tree","column-tree",841938146));
var show_row_branches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"show-row-branches?","show-row-branches?",1970508230));
var on_export_column_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368));
var column_tree_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"column-tree-depth","column-tree-depth",-607656054));
var row_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"row-tree","row-tree",687483819));
var on_export_row_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132));
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16730__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749),(20));
var row_header_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16730__$1,new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),(40));
var virtualize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16730__$1,new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848),true);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var column_header_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16730__$1,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),(20));
var row_tree_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"row-tree-depth","row-tree-depth",-1290478766));
var column_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16730__$1,new cljs.core.Keyword(null,"column-width","column-width",405119380),(40));
var show_root_headers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16730__$1,new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),true);
var on_export_corner_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16730__$1,new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713));
var vec__16741 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}));
var scroll_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(0),null);
var scroll_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(1),null);
var content_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(2),null);
var content_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(3),null);
var _BANG_wrapper_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(4),null);
var scroll_listener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(5),null);
var resize_observer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(6),null);
var overlay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(7),null);
var hide_resizers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16741,(8),null);
var wrapper_ref_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,_BANG_wrapper_ref);
var on_scroll_BANG_ = (function (p1__16696_SHARP_){
cljs.core.reset_BANG_(scroll_left,p1__16696_SHARP_.target.scrollLeft);

cljs.core.reset_BANG_(scroll_top,p1__16696_SHARP_.target.scrollTop);

var temp__5804__auto___17128 = cljs.core.deref(hide_resizers_QMARK_);
if(cljs.core.truth_(temp__5804__auto___17128)){
var timeout_17129 = temp__5804__auto___17128;
clearTimeout(timeout_17129);
} else {
}

return cljs.core.reset_BANG_(hide_resizers_QMARK_,setTimeout((function (){
return cljs.core.reset_BANG_(hide_resizers_QMARK_,null);
}),(300)));
});
var on_resize_BANG_ = (function (p1__16697_SHARP_){
cljs.core.reset_BANG_(content_height,(p1__16697_SHARP_[(0)]).contentRect.height);

return cljs.core.reset_BANG_(content_width,(p1__16697_SHARP_[(0)]).contentRect.width);
});
var prev_row_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_tree));
var prev_column_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_tree));
var prev_row_header_widths = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_header_widths));
var prev_column_header_heights = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_header_heights));
var internal_row_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_tree));
var internal_column_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_tree));
var internal_on_export = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export));
var internal_on_export_cell = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_cell));
var internal_on_export_column_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_column_header));
var internal_on_export_row_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_row_header));
var internal_on_export_corner_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_corner_header));
var row_size_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var column_size_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var row_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window((function (){var G__16750 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_row_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),row_size_cache,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_row_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(row_height),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_)], null);
if(cljs.core.truth_(virtualize_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__16750,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window-start","window-start",-1535255967),((function (){var or__5002__auto__ = cljs.core.deref(scroll_top);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() - (20)),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),(cljs.core.deref(scroll_top) + cljs.core.deref(content_height))], null)], 0));
} else {
return G__16750;
}
})());
}));
var column_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window((function (){var G__16751 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_column_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),column_size_cache,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_column_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(column_width),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_)], null);
if(cljs.core.truth_(virtualize_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__16751,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window-start","window-start",-1535255967),((function (){var or__5002__auto__ = cljs.core.deref(scroll_left);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() - (20)),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),((cljs.core.deref(scroll_left) + cljs.core.deref(content_width)) + (50))], null)], 0));
} else {
return G__16751;
}
})());
}));
var complete_row_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_row_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),row_size_cache,new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_row_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(row_height),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_),new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),false], null));
}));
var complete_column_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.window(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_column_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),column_size_cache,new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_column_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(column_width),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_),new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),false], null));
}));
var column_depth = reagent.ratom.make_reaction((function (){
var or__5002__auto__ = re_com.util.deref_or_value(column_tree_depth);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__16754 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
if(cljs.core.not(show_root_headers_QMARK_)){
return (G__16754 - (1));
} else {
return G__16754;
}
}
}));
var row_depth = reagent.ratom.make_reaction((function (){
var or__5002__auto__ = re_com.util.deref_or_value(row_tree_depth);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__16755 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
if(cljs.core.not(show_root_headers_QMARK_)){
return (G__16755 - (1));
} else {
return G__16755;
}
}
}));
var internal_row_header_widths = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = re_com.util.deref_or_value(row_header_widths);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),re_com.util.deref_or_value(row_header_width)));
}
})());
var internal_column_header_heights = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = re_com.util.deref_or_value(column_header_heights);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),re_com.util.deref_or_value(column_header_height)));
}
})());
var safe_column_header_heights = reagent.ratom.make_reaction((function (){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_depth),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16702_SHARP_){
var or__5002__auto__ = p1__16702_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return column_header_height;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_column_header_heights),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_header_height))))));
}));
var safe_row_header_widths = reagent.ratom.make_reaction((function (){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16703_SHARP_){
var or__5002__auto__ = p1__16703_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return row_header_width;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_row_header_widths),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_header_width))))));
}));
var column_header_height_total = reagent.ratom.make_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(safe_column_header_heights));
}));
var column_width_total = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sum-size","sum-size",1340005431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_paths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"header-paths","header-paths",1334163001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_keypaths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"keypaths","keypaths",1637512847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_sizes = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_template(cljs.core.deref(column_traversal));
}));
var column_cross_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(safe_column_header_heights));
}));
var row_header_width_total = reagent.ratom.make_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(safe_row_header_widths));
}));
var row_height_total = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sum-size","sum-size",1340005431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_paths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"header-paths","header-paths",1334163001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_keypaths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"keypaths","keypaths",1637512847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_sizes = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_template(cljs.core.deref(row_traversal));
}));
var row_cross_template = reagent.ratom.make_reaction((function (){
return re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(safe_row_header_widths));
}));
var corner_header_edges = (function (p__16777){
var map__16778 = p__16777;
var map__16778__$1 = cljs.core.__destructure_map(map__16778);
var rd = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16778__$1,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth));
var cd = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16778__$1,new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16778__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16778__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var G__16779 = cljs.core.PersistentHashSet.EMPTY;
var G__16779__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16779,new cljs.core.Keyword(null,"top","top",-1856271961)):G__16779);
var G__16779__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(cd - (1))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16779__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)):G__16779__$1);
var G__16779__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16779__$2,new cljs.core.Keyword(null,"left","left",-399115937)):G__16779__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(rd - (1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16779__$3,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return G__16779__$3;
}
});
var export_fn = (function re_com$nested_v_grid$nested_v_grid_$_export_fn(){
var map__16784 = cljs.core.deref(complete_row_traversal);
var map__16784__$1 = cljs.core.__destructure_map(map__16784);
var row_paths__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16784__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var map__16786 = cljs.core.deref(complete_column_traversal);
var map__16786__$1 = cljs.core.__destructure_map(map__16786);
var column_paths__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16786__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var on_export_cell__$1 = cljs.core.deref(internal_on_export_cell);
var on_export_column_header__$1 = cljs.core.deref(internal_on_export_column_header);
var on_export_row_header__$1 = cljs.core.deref(internal_on_export_row_header);
var on_export_corner_header__$1 = cljs.core.deref(internal_on_export_corner_header);
var row_headers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790(s__16791){
return (new cljs.core.LazySeq(null,(function (){
var s__16791__$1 = s__16791;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16791__$1);
if(temp__5804__auto__){
var s__16791__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16791__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16791__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16793 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16792 = (0);
while(true){
if((i__16792 < size__5479__auto__)){
var showing_row_path = cljs.core._nth(c__5478__auto__,i__16792);
var map__16796 = cljs.core.meta(showing_row_path);
var map__16796__$1 = cljs.core.__destructure_map(map__16796);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16796__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16796__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5002__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_row_path__$1 = (function (){var G__16797 = showing_row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16797,(1));
} else {
return G__16797;
}
})();
var this_depth = cljs.core.count(showing_row_path__$1);
cljs.core.chunk_append(b__16793,(function (){var iter__5480__auto__ = ((function (i__16792,s__16791__$1,showing_row_path__$1,this_depth,map__16796,map__16796__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5478__auto__,size__5479__auto__,b__16793,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790_$_iter__16799(s__16800){
return (new cljs.core.LazySeq(null,((function (i__16792,s__16791__$1,showing_row_path__$1,this_depth,map__16796,map__16796__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5478__auto__,size__5479__auto__,b__16793,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__16800__$1 = s__16800;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16800__$1);
if(temp__5804__auto____$1){
var s__16800__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16800__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__16800__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__16802 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__16801 = (0);
while(true){
if((i__16801 < size__5479__auto____$1)){
var i = cljs.core._nth(c__5478__auto____$1,i__16801);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16804 = cljs.core.meta(row_path);
var map__16804__$1 = cljs.core.__destructure_map(map__16804);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16804__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__16802,(on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)));

var G__17154 = (i__16801 + (1));
i__16801 = G__17154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16802),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790_$_iter__16799(cljs.core.chunk_rest(s__16800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16802),null);
}
} else {
var i = cljs.core.first(s__16800__$2);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16807 = cljs.core.meta(row_path);
var map__16807__$1 = cljs.core.__destructure_map(map__16807);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790_$_iter__16799(cljs.core.rest(s__16800__$2)));
}
} else {
return null;
}
break;
}
});})(i__16792,s__16791__$1,showing_row_path__$1,this_depth,map__16796,map__16796__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5478__auto__,size__5479__auto__,b__16793,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__16792,s__16791__$1,showing_row_path__$1,this_depth,map__16796,map__16796__$1,leaf_QMARK_,show_QMARK_,showing_row_path,c__5478__auto__,size__5479__auto__,b__16793,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})());

var G__17156 = (i__16792 + (1));
i__16792 = G__17156;
continue;
} else {
var G__17157 = (i__16792 + (1));
i__16792 = G__17157;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16793),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790(cljs.core.chunk_rest(s__16791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16793),null);
}
} else {
var showing_row_path = cljs.core.first(s__16791__$2);
var map__16815 = cljs.core.meta(showing_row_path);
var map__16815__$1 = cljs.core.__destructure_map(map__16815);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16815__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16815__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5002__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_row_path__$1 = (function (){var G__16823 = showing_row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16823,(1));
} else {
return G__16823;
}
})();
var this_depth = cljs.core.count(showing_row_path__$1);
return cljs.core.cons((function (){var iter__5480__auto__ = ((function (s__16791__$1,showing_row_path__$1,this_depth,map__16815,map__16815__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790_$_iter__16826(s__16827){
return (new cljs.core.LazySeq(null,((function (s__16791__$1,showing_row_path__$1,this_depth,map__16815,map__16815__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__16827__$1 = s__16827;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16827__$1);
if(temp__5804__auto____$1){
var s__16827__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16827__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16827__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16829 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16828 = (0);
while(true){
if((i__16828 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__16828);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16833 = cljs.core.meta(row_path);
var map__16833__$1 = cljs.core.__destructure_map(map__16833);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16833__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__16829,(on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)));

var G__17162 = (i__16828 + (1));
i__16828 = G__17162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16829),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790_$_iter__16826(cljs.core.chunk_rest(s__16827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16829),null);
}
} else {
var i = cljs.core.first(s__16827__$2);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16836 = cljs.core.meta(row_path);
var map__16836__$1 = cljs.core.__destructure_map(map__16836);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16836__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790_$_iter__16826(cljs.core.rest(s__16827__$2)));
}
} else {
return null;
}
break;
}
});})(s__16791__$1,showing_row_path__$1,this_depth,map__16815,map__16815__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__16791__$1,showing_row_path__$1,this_depth,map__16815,map__16815__$1,leaf_QMARK_,show_QMARK_,showing_row_path,s__16791__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16790(cljs.core.rest(s__16791__$2)));
} else {
var G__17163 = cljs.core.rest(s__16791__$2);
s__16791__$1 = G__17163;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__((function (){var G__16841 = row_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__16841);
} else {
return G__16841;
}
})());
})();
var column_headers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843(s__16844){
return (new cljs.core.LazySeq(null,(function (){
var s__16844__$1 = s__16844;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16844__$1);
if(temp__5804__auto__){
var s__16844__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16844__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16844__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16846 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16845 = (0);
while(true){
if((i__16845 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__16845);
cljs.core.chunk_append(b__16846,(function (){var iter__5480__auto__ = ((function (i__16845,i,c__5478__auto__,size__5479__auto__,b__16846,s__16844__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843_$_iter__16853(s__16854){
return (new cljs.core.LazySeq(null,((function (i__16845,i,c__5478__auto__,size__5479__auto__,b__16846,s__16844__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__16854__$1 = s__16854;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16854__$1);
if(temp__5804__auto____$1){
var s__16854__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16854__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__16854__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__16856 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__16855 = (0);
while(true){
if((i__16855 < size__5479__auto____$1)){
var showing_column_path = cljs.core._nth(c__5478__auto____$1,i__16855);
var map__16858 = cljs.core.meta(showing_column_path);
var map__16858__$1 = cljs.core.__destructure_map(map__16858);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16858__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16858__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5002__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__16863 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16863,(1));
} else {
return G__16863;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16862 = cljs.core.meta(column_path);
var map__16862__$1 = cljs.core.__destructure_map(map__16862);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16862__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__16856,(on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)));

var G__17165 = (i__16855 + (1));
i__16855 = G__17165;
continue;
} else {
var G__17166 = (i__16855 + (1));
i__16855 = G__17166;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16856),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843_$_iter__16853(cljs.core.chunk_rest(s__16854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16856),null);
}
} else {
var showing_column_path = cljs.core.first(s__16854__$2);
var map__16869 = cljs.core.meta(showing_column_path);
var map__16869__$1 = cljs.core.__destructure_map(map__16869);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5002__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__16875 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16875,(1));
} else {
return G__16875;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16874 = cljs.core.meta(column_path);
var map__16874__$1 = cljs.core.__destructure_map(map__16874);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16874__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843_$_iter__16853(cljs.core.rest(s__16854__$2)));
} else {
var G__17167 = cljs.core.rest(s__16854__$2);
s__16854__$1 = G__17167;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__16845,i,c__5478__auto__,size__5479__auto__,b__16846,s__16844__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__16845,i,c__5478__auto__,size__5479__auto__,b__16846,s__16844__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__((function (){var G__16877 = column_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__16877);
} else {
return G__16877;
}
})());
})());

var G__17168 = (i__16845 + (1));
i__16845 = G__17168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16846),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843(cljs.core.chunk_rest(s__16844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16846),null);
}
} else {
var i = cljs.core.first(s__16844__$2);
return cljs.core.cons((function (){var iter__5480__auto__ = ((function (i,s__16844__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843_$_iter__16879(s__16880){
return (new cljs.core.LazySeq(null,(function (){
var s__16880__$1 = s__16880;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16880__$1);
if(temp__5804__auto____$1){
var s__16880__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16880__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16880__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16882 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16881 = (0);
while(true){
if((i__16881 < size__5479__auto__)){
var showing_column_path = cljs.core._nth(c__5478__auto__,i__16881);
var map__16885 = cljs.core.meta(showing_column_path);
var map__16885__$1 = cljs.core.__destructure_map(map__16885);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16885__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5002__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__16888 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16888,(1));
} else {
return G__16888;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16887 = cljs.core.meta(column_path);
var map__16887__$1 = cljs.core.__destructure_map(map__16887);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16887__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__16882,(on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)));

var G__17169 = (i__16881 + (1));
i__16881 = G__17169;
continue;
} else {
var G__17170 = (i__16881 + (1));
i__16881 = G__17170;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16882),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843_$_iter__16879(cljs.core.chunk_rest(s__16880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16882),null);
}
} else {
var showing_column_path = cljs.core.first(s__16880__$2);
var map__16899 = cljs.core.meta(showing_column_path);
var map__16899__$1 = cljs.core.__destructure_map(map__16899);
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16899__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16899__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
if(cljs.core.truth_((function (){var or__5002__auto__ = leaf_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return show_QMARK_;
}
})())){
var showing_column_path__$1 = (function (){var G__16906 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16906,(1));
} else {
return G__16906;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),(function (){var x__5090__auto__ = (i + (1));
var y__5091__auto__ = this_depth;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var map__16905 = cljs.core.meta(column_path);
var map__16905__$1 = cljs.core.__destructure_map(map__16905);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843_$_iter__16879(cljs.core.rest(s__16880__$2)));
} else {
var G__17171 = cljs.core.rest(s__16880__$2);
s__16880__$1 = G__17171;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__16844__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__((function (){var G__16911 = column_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__16911);
} else {
return G__16911;
}
})());
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16843(cljs.core.rest(s__16844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var corner_headers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912(s__16913){
return (new cljs.core.LazySeq(null,(function (){
var s__16913__$1 = s__16913;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16913__$1);
if(temp__5804__auto__){
var s__16913__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16913__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16913__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16915 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16914 = (0);
while(true){
if((i__16914 < size__5479__auto__)){
var row_index = cljs.core._nth(c__5478__auto__,i__16914);
cljs.core.chunk_append(b__16915,(function (){var iter__5480__auto__ = ((function (i__16914,row_index,c__5478__auto__,size__5479__auto__,b__16915,s__16913__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912_$_iter__16918(s__16919){
return (new cljs.core.LazySeq(null,((function (i__16914,row_index,c__5478__auto__,size__5479__auto__,b__16915,s__16913__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__16919__$1 = s__16919;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16919__$1);
if(temp__5804__auto____$1){
var s__16919__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16919__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__16919__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__16921 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__16920 = (0);
while(true){
if((i__16920 < size__5479__auto____$1)){
var column_index = cljs.core._nth(c__5478__auto____$1,i__16920);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
cljs.core.chunk_append(b__16921,(on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)));

var G__17172 = (i__16920 + (1));
i__16920 = G__17172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16921),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912_$_iter__16918(cljs.core.chunk_rest(s__16919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16921),null);
}
} else {
var column_index = cljs.core.first(s__16919__$2);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
return cljs.core.cons((on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912_$_iter__16918(cljs.core.rest(s__16919__$2)));
}
} else {
return null;
}
break;
}
});})(i__16914,row_index,c__5478__auto__,size__5479__auto__,b__16915,s__16913__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__16914,row_index,c__5478__auto__,size__5479__auto__,b__16915,s__16913__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})());

var G__17173 = (i__16914 + (1));
i__16914 = G__17173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16915),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912(cljs.core.chunk_rest(s__16913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16915),null);
}
} else {
var row_index = cljs.core.first(s__16913__$2);
return cljs.core.cons((function (){var iter__5480__auto__ = ((function (row_index,s__16913__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912_$_iter__16927(s__16928){
return (new cljs.core.LazySeq(null,(function (){
var s__16928__$1 = s__16928;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16928__$1);
if(temp__5804__auto____$1){
var s__16928__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16928__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16928__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16930 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16929 = (0);
while(true){
if((i__16929 < size__5479__auto__)){
var column_index = cljs.core._nth(c__5478__auto__,i__16929);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
cljs.core.chunk_append(b__16930,(on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)));

var G__17174 = (i__16929 + (1));
i__16929 = G__17174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16930),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912_$_iter__16927(cljs.core.chunk_rest(s__16928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16930),null);
}
} else {
var column_index = cljs.core.first(s__16928__$2);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
return cljs.core.cons((on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912_$_iter__16927(cljs.core.rest(s__16928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__16913__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16912(cljs.core.rest(s__16913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var cells = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943(s__16944){
return (new cljs.core.LazySeq(null,(function (){
var s__16944__$1 = s__16944;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16944__$1);
if(temp__5804__auto__){
var s__16944__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16944__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16944__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16946 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16945 = (0);
while(true){
if((i__16945 < size__5479__auto__)){
var row_path = cljs.core._nth(c__5478__auto__,i__16945);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path)))){
var row_path__$1 = (function (){var G__16947 = row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16947,(1));
} else {
return G__16947;
}
})();
cljs.core.chunk_append(b__16946,(function (){var iter__5480__auto__ = ((function (i__16945,s__16944__$1,row_path__$1,row_path,c__5478__auto__,size__5479__auto__,b__16946,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943_$_iter__16948(s__16949){
return (new cljs.core.LazySeq(null,((function (i__16945,s__16944__$1,row_path__$1,row_path,c__5478__auto__,size__5479__auto__,b__16946,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__16949__$1 = s__16949;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16949__$1);
if(temp__5804__auto____$1){
var s__16949__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16949__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__16949__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__16951 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__16950 = (0);
while(true){
if((i__16950 < size__5479__auto____$1)){
var column_path = cljs.core._nth(c__5478__auto____$1,i__16950);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__16953 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16953,(1));
} else {
return G__16953;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
cljs.core.chunk_append(b__16951,(on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)));

var G__17175 = (i__16950 + (1));
i__16950 = G__17175;
continue;
} else {
var G__17176 = (i__16950 + (1));
i__16950 = G__17176;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16951),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943_$_iter__16948(cljs.core.chunk_rest(s__16949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16951),null);
}
} else {
var column_path = cljs.core.first(s__16949__$2);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__16954 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16954,(1));
} else {
return G__16954;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
return cljs.core.cons((on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943_$_iter__16948(cljs.core.rest(s__16949__$2)));
} else {
var G__17177 = cljs.core.rest(s__16949__$2);
s__16949__$1 = G__17177;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__16945,s__16944__$1,row_path__$1,row_path,c__5478__auto__,size__5479__auto__,b__16946,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__16945,s__16944__$1,row_path__$1,row_path,c__5478__auto__,size__5479__auto__,b__16946,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__(column_paths__$1);
})());

var G__17178 = (i__16945 + (1));
i__16945 = G__17178;
continue;
} else {
var G__17179 = (i__16945 + (1));
i__16945 = G__17179;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16946),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943(cljs.core.chunk_rest(s__16944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16946),null);
}
} else {
var row_path = cljs.core.first(s__16944__$2);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path)))){
var row_path__$1 = (function (){var G__16955 = row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16955,(1));
} else {
return G__16955;
}
})();
return cljs.core.cons((function (){var iter__5480__auto__ = ((function (s__16944__$1,row_path__$1,row_path,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943_$_iter__16956(s__16957){
return (new cljs.core.LazySeq(null,((function (s__16944__$1,row_path__$1,row_path,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__16957__$1 = s__16957;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16957__$1);
if(temp__5804__auto____$1){
var s__16957__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16957__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16957__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16959 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16958 = (0);
while(true){
if((i__16958 < size__5479__auto__)){
var column_path = cljs.core._nth(c__5478__auto__,i__16958);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__16960 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16960,(1));
} else {
return G__16960;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
cljs.core.chunk_append(b__16959,(on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)));

var G__17180 = (i__16958 + (1));
i__16958 = G__17180;
continue;
} else {
var G__17181 = (i__16958 + (1));
i__16958 = G__17181;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16959),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943_$_iter__16956(cljs.core.chunk_rest(s__16957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16959),null);
}
} else {
var column_path = cljs.core.first(s__16957__$2);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path)))){
var column_path__$1 = (function (){var G__16961 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__16961,(1));
} else {
return G__16961;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
return cljs.core.cons((on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943_$_iter__16956(cljs.core.rest(s__16957__$2)));
} else {
var G__17182 = cljs.core.rest(s__16957__$2);
s__16957__$1 = G__17182;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__16944__$1,row_path__$1,row_path,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__16944__$1,row_path__$1,row_path,s__16944__$2,temp__5804__auto__,map__16784,map__16784__$1,row_paths__$1,map__16786,map__16786__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5480__auto__(column_paths__$1);
})(),re_com$nested_v_grid$nested_v_grid_$_export_fn_$_iter__16943(cljs.core.rest(s__16944__$2)));
} else {
var G__17183 = cljs.core.rest(s__16944__$2);
s__16944__$1 = G__17183;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(row_paths__$1);
})();
var G__16962 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"corner-headers","corner-headers",-2127546543),corner_headers,new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),row_headers,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),column_headers,new cljs.core.Keyword(null,"cells","cells",-985166822),cells,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,corner_headers,column_headers),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,row_headers,cells))], null);
return (on_export.cljs$core$IFn$_invoke$arity$1 ? on_export.cljs$core$IFn$_invoke$arity$1(G__16962) : on_export.call(null,G__16962));
});
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5804__auto___17184 = on_init_export_fn;
if(cljs.core.truth_(temp__5804__auto___17184)){
var init_17185 = temp__5804__auto___17184;
(init_17185.cljs$core$IFn$_invoke$arity$1 ? init_17185.cljs$core$IFn$_invoke$arity$1(export_fn) : init_17185.call(null,export_fn));
} else {
}

var temp__5804__auto__ = cljs.core.deref(_BANG_wrapper_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var wrapper_ref = temp__5804__auto__;
cljs.core.reset_BANG_(scroll_listener,wrapper_ref.addEventListener("scroll",on_scroll_BANG_));

return cljs.core.reset_BANG_(resize_observer,(new ResizeObserver(on_resize_BANG_)).observe(wrapper_ref));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var vec__16966 = reagent.core.argv(this$);
var seq__16967 = cljs.core.seq(vec__16966);
var first__16968 = cljs.core.first(seq__16967);
var seq__16967__$1 = cljs.core.next(seq__16967);
var _ = first__16968;
var map__16969 = seq__16967__$1;
var map__16969__$1 = cljs.core.__destructure_map(map__16969);
var row_tree__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16969__$1,new cljs.core.Keyword(null,"row-tree","row-tree",687483819));
var column_tree__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16969__$1,new cljs.core.Keyword(null,"column-tree","column-tree",841938146));
var on_export__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16969__$1,new cljs.core.Keyword(null,"on-export","on-export",1803619391));
var on_export_cell__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16969__$1,new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067));
var on_export_row_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16969__$1,new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132));
var on_export_column_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16969__$1,new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368));
var on_export_corner_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16969__$1,new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713));
var seq__16972_17186 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_tree__$1,prev_row_tree,internal_row_tree], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_tree__$1,prev_column_tree,internal_column_tree], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_header_widths,prev_row_header_widths,internal_row_header_widths], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_header_heights,prev_column_header_heights,internal_column_header_heights], null)], null));
var chunk__16974_17187 = null;
var count__16975_17188 = (0);
var i__16976_17189 = (0);
while(true){
if((i__16976_17189 < count__16975_17188)){
var vec__16985_17190 = chunk__16974_17187.cljs$core$IIndexed$_nth$arity$2(null,i__16976_17189);
var external_prop_17191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985_17190,(0),null);
var prev_external_prop_17192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985_17190,(1),null);
var internal_prop_17193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985_17190,(2),null);
var external_value_17194 = re_com.util.deref_or_value(external_prop_17191);
var prev_external_value_17195 = re_com.util.deref_or_value(prev_external_prop_17192);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_external_value_17195,external_value_17194)){
cljs.core.reset_BANG_(prev_external_prop_17192,external_value_17194);

cljs.core.reset_BANG_(internal_prop_17193,external_value_17194);
} else {
}


var G__17196 = seq__16972_17186;
var G__17197 = chunk__16974_17187;
var G__17198 = count__16975_17188;
var G__17199 = (i__16976_17189 + (1));
seq__16972_17186 = G__17196;
chunk__16974_17187 = G__17197;
count__16975_17188 = G__17198;
i__16976_17189 = G__17199;
continue;
} else {
var temp__5804__auto___17200 = cljs.core.seq(seq__16972_17186);
if(temp__5804__auto___17200){
var seq__16972_17201__$1 = temp__5804__auto___17200;
if(cljs.core.chunked_seq_QMARK_(seq__16972_17201__$1)){
var c__5525__auto___17202 = cljs.core.chunk_first(seq__16972_17201__$1);
var G__17203 = cljs.core.chunk_rest(seq__16972_17201__$1);
var G__17204 = c__5525__auto___17202;
var G__17205 = cljs.core.count(c__5525__auto___17202);
var G__17206 = (0);
seq__16972_17186 = G__17203;
chunk__16974_17187 = G__17204;
count__16975_17188 = G__17205;
i__16976_17189 = G__17206;
continue;
} else {
var vec__16991_17207 = cljs.core.first(seq__16972_17201__$1);
var external_prop_17208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16991_17207,(0),null);
var prev_external_prop_17209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16991_17207,(1),null);
var internal_prop_17210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16991_17207,(2),null);
var external_value_17211 = re_com.util.deref_or_value(external_prop_17208);
var prev_external_value_17212 = re_com.util.deref_or_value(prev_external_prop_17209);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_external_value_17212,external_value_17211)){
cljs.core.reset_BANG_(prev_external_prop_17209,external_value_17211);

cljs.core.reset_BANG_(internal_prop_17210,external_value_17211);
} else {
}


var G__17213 = cljs.core.next(seq__16972_17201__$1);
var G__17214 = null;
var G__17215 = (0);
var G__17216 = (0);
seq__16972_17186 = G__17213;
chunk__16974_17187 = G__17214;
count__16975_17188 = G__17215;
i__16976_17189 = G__17216;
continue;
}
} else {
}
}
break;
}

var seq__16994 = cljs.core.seq(cljs.core.PersistentArrayMap.createAsIfByAssoc([on_export__$1,internal_on_export,on_export_cell__$1,internal_on_export_cell,on_export_row_header__$1,internal_on_export_row_header,on_export_column_header__$1,internal_on_export_column_header,on_export_corner_header__$1,internal_on_export_corner_header]));
var chunk__16996 = null;
var count__16997 = (0);
var i__16998 = (0);
while(true){
if((i__16998 < count__16997)){
var vec__17012 = chunk__16996.cljs$core$IIndexed$_nth$arity$2(null,i__16998);
var external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17012,(0),null);
var internal_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17012,(1),null);
var external_value_17217 = re_com.util.deref_or_value(external_prop);
cljs.core.reset_BANG_(internal_prop,external_value_17217);


var G__17218 = seq__16994;
var G__17219 = chunk__16996;
var G__17220 = count__16997;
var G__17221 = (i__16998 + (1));
seq__16994 = G__17218;
chunk__16996 = G__17219;
count__16997 = G__17220;
i__16998 = G__17221;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16994);
if(temp__5804__auto__){
var seq__16994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16994__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16994__$1);
var G__17222 = cljs.core.chunk_rest(seq__16994__$1);
var G__17223 = c__5525__auto__;
var G__17224 = cljs.core.count(c__5525__auto__);
var G__17225 = (0);
seq__16994 = G__17222;
chunk__16996 = G__17223;
count__16997 = G__17224;
i__16998 = G__17225;
continue;
} else {
var vec__17018 = cljs.core.first(seq__16994__$1);
var external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17018,(0),null);
var internal_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17018,(1),null);
var external_value_17226 = re_com.util.deref_or_value(external_prop);
cljs.core.reset_BANG_(internal_prop,external_value_17226);


var G__17227 = cljs.core.next(seq__16994__$1);
var G__17228 = null;
var G__17229 = (0);
var G__17230 = (0);
seq__16994 = G__17227;
chunk__16996 = G__17228;
count__16997 = G__17229;
i__16998 = G__17230;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__17023){
var map__17024 = p__17023;
var map__17024__$1 = cljs.core.__destructure_map(map__17024);
var props = map__17024__$1;
var resize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17024__$1,new cljs.core.Keyword(null,"resize?","resize?",459924349),true);
var on_resize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17024__$1,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),(function (p__17026){
var map__17027 = p__17026;
var map__17027__$1 = cljs.core.__destructure_map(map__17027);
var header_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17027__$1,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17027__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17027__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17027__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__17028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_dimension,size_dimension], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__17028)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(internal_column_header_heights,re_com.nested_v_grid.safe_assoc,cljs.core.first(keypath),size);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__17028)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(internal_row_header_widths,re_com.nested_v_grid.safe_assoc,cljs.core.first(keypath),size);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__17028)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(internal_row_tree,cljs.core.update_in,keypath,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),size], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__17028)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(internal_column_tree,cljs.core.update_in,keypath,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),size], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17028)].join('')));

}
}
}
}
}));
var resize_row_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17024__$1,new cljs.core.Keyword(null,"resize-row-height?","resize-row-height?",1988704991),true);
var resize_column_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17024__$1,new cljs.core.Keyword(null,"resize-column-width?","resize-column-width?",-1090814270),true);
var resize_row_header_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17024__$1,new cljs.core.Keyword(null,"resize-row-header-width?","resize-row-header-width?",645501346),true);
var theme_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17024__$1,new cljs.core.Keyword(null,"theme-cells?","theme-cells?",129212611));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17024__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17024__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var show_root_headers_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17024__$1,new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),true);
var resize_column_header_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17024__$1,new cljs.core.Keyword(null,"resize-column-header-height?","resize-column-header-height?",-478677866),true);
var ensure_reactivity_17231 = re_com.util.deref_or_value;
var external_keys_17232 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-tree","row-tree",687483819),new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"column-tree","column-tree",841938146),new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439),new cljs.core.Keyword(null,"column-width","column-width",405119380),new cljs.core.Keyword(null,"on-export","on-export",1803619391),new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067),new cljs.core.Keyword(null,"on-export-header","on-export-header",1679011768),new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713),new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132),new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368)], null);
var external_props_17233 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(props,external_keys_17232);
var seq__17031_17234 = cljs.core.seq(external_props_17233);
var chunk__17032_17235 = null;
var count__17033_17236 = (0);
var i__17034_17237 = (0);
while(true){
if((i__17034_17237 < count__17033_17236)){
var prop_17238 = chunk__17032_17235.cljs$core$IIndexed$_nth$arity$2(null,i__17034_17237);
(ensure_reactivity_17231.cljs$core$IFn$_invoke$arity$1 ? ensure_reactivity_17231.cljs$core$IFn$_invoke$arity$1(prop_17238) : ensure_reactivity_17231.call(null,prop_17238));


var G__17239 = seq__17031_17234;
var G__17240 = chunk__17032_17235;
var G__17241 = count__17033_17236;
var G__17242 = (i__17034_17237 + (1));
seq__17031_17234 = G__17239;
chunk__17032_17235 = G__17240;
count__17033_17236 = G__17241;
i__17034_17237 = G__17242;
continue;
} else {
var temp__5804__auto___17243 = cljs.core.seq(seq__17031_17234);
if(temp__5804__auto___17243){
var seq__17031_17244__$1 = temp__5804__auto___17243;
if(cljs.core.chunked_seq_QMARK_(seq__17031_17244__$1)){
var c__5525__auto___17245 = cljs.core.chunk_first(seq__17031_17244__$1);
var G__17246 = cljs.core.chunk_rest(seq__17031_17244__$1);
var G__17247 = c__5525__auto___17245;
var G__17248 = cljs.core.count(c__5525__auto___17245);
var G__17249 = (0);
seq__17031_17234 = G__17246;
chunk__17032_17235 = G__17247;
count__17033_17236 = G__17248;
i__17034_17237 = G__17249;
continue;
} else {
var prop_17250 = cljs.core.first(seq__17031_17244__$1);
(ensure_reactivity_17231.cljs$core$IFn$_invoke$arity$1 ? ensure_reactivity_17231.cljs$core$IFn$_invoke$arity$1(prop_17250) : ensure_reactivity_17231.call(null,prop_17250));


var G__17251 = cljs.core.next(seq__17031_17244__$1);
var G__17252 = null;
var G__17253 = (0);
var G__17254 = (0);
seq__17031_17234 = G__17251;
chunk__17032_17235 = G__17252;
count__17033_17236 = G__17253;
i__17034_17237 = G__17254;
continue;
}
} else {
}
}
break;
}

var or__5002__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.nested_v_grid.args_desc),props));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.nested_v_grid.part_structure,props);
var resize_BANG_ = (function (p__17040){
var map__17041 = p__17040;
var map__17041__$1 = cljs.core.__destructure_map(map__17041);
var props__$1 = map__17041__$1;
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17041__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17041__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
var header_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17041__$1,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129));
var temp__5804__auto___17255 = (function (){var G__17042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_dimension,size_dimension], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__17042)){
return cljs.core.deref(internal_row_tree);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__17042)){
return cljs.core.deref(internal_column_tree);
} else {
return null;

}
}
})();
if(cljs.core.truth_(temp__5804__auto___17255)){
var tree_17256 = temp__5804__auto___17255;
cljs.core._vreset_BANG_((function (){var G__17043 = header_dimension;
var G__17043__$1 = (((G__17043 instanceof cljs.core.Keyword))?G__17043.fqn:null);
switch (G__17043__$1) {
case "row":
return row_size_cache;

break;
case "column":
return column_size_cache;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17043__$1)].join('')));

}
})(),re_com.nested_v_grid.util.evict_BANG_(cljs.core._deref((function (){var G__17044 = header_dimension;
var G__17044__$1 = (((G__17044 instanceof cljs.core.Keyword))?G__17044.fqn:null);
switch (G__17044__$1) {
case "row":
return row_size_cache;

break;
case "column":
return column_size_cache;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17044__$1)].join('')));

}
})()),tree_17256,keypath));
} else {
}

return (on_resize.cljs$core$IFn$_invoke$arity$1 ? on_resize.cljs$core$IFn$_invoke$arity$1(props__$1) : on_resize.call(null,props__$1));
});
var row_width_resizers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17045(s__17046){
return (new cljs.core.LazySeq(null,(function (){
var s__17046__$1 = s__17046;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17046__$1);
if(temp__5804__auto__){
var s__17046__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17046__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17046__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17048 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17047 = (0);
while(true){
if((i__17047 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17047);
cljs.core.chunk_append(b__17048,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),resize_BANG_,new cljs.core.Keyword(null,"overlay","overlay",-139131598),overlay,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),i)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-width-resizer","re-com.nested-v-grid/row-width-resizer",691550326),i], null)], null)));

var G__17259 = (i__17047 + (1));
i__17047 = G__17259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17048),re_com$nested_v_grid$nested_v_grid_$_iter__17045(cljs.core.chunk_rest(s__17046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17048),null);
}
} else {
var i = cljs.core.first(s__17046__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),resize_BANG_,new cljs.core.Keyword(null,"overlay","overlay",-139131598),overlay,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),i)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-width-resizer","re-com.nested-v-grid/row-width-resizer",691550326),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17045(cljs.core.rest(s__17046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})();
var column_height_resizers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17049(s__17050){
return (new cljs.core.LazySeq(null,(function (){
var s__17050__$1 = s__17050;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17050__$1);
if(temp__5804__auto__){
var s__17050__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17050__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17050__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17052 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17051 = (0);
while(true){
if((i__17051 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17051);
cljs.core.chunk_append(b__17052,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i),i,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_column_header_heights),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"column","column",2078222095),overlay,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-height-resizer","re-com.nested-v-grid/column-height-resizer",1099383675),i], null)], null)));

var G__17260 = (i__17051 + (1));
i__17051 = G__17260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17052),re_com$nested_v_grid$nested_v_grid_$_iter__17049(cljs.core.chunk_rest(s__17050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17052),null);
}
} else {
var i = cljs.core.first(s__17050__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i),i,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_column_header_heights),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"column","column",2078222095),overlay,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-height-resizer","re-com.nested-v-grid/column-height-resizer",1099383675),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17049(cljs.core.rest(s__17050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var row_height_resizers = (function() { 
var G__17261__delegate = function (p__17056){
var map__17057 = p__17056;
var map__17057__$1 = cljs.core.__destructure_map(map__17057);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17057__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17058(s__17059){
return (new cljs.core.LazySeq(null,(function (){
var s__17059__$1 = s__17059;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17059__$1);
if(temp__5804__auto__){
var s__17059__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17059__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17059__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17061 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17060 = (0);
while(true){
if((i__17060 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17060);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(row_path));
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__17061,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[row_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row","row",-570139521),overlay,new cljs.core.Keyword(null,"row-height","row-height",527360749),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-height-resizer","re-com.nested-v-grid/row-height-resizer",319915223),i], null)], null)));

var G__17262 = (i__17060 + (1));
i__17060 = G__17262;
continue;
} else {
var G__17263 = (i__17060 + (1));
i__17060 = G__17263;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17061),re_com$nested_v_grid$nested_v_grid_$_iter__17058(cljs.core.chunk_rest(s__17059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17061),null);
}
} else {
var i = cljs.core.first(s__17059__$2);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(row_path));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(row_path));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[row_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row","row",-570139521),overlay,new cljs.core.Keyword(null,"row-height","row-height",527360749),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-height-resizer","re-com.nested-v-grid/row-height-resizer",319915223),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17058(cljs.core.rest(s__17059__$2)));
} else {
var G__17264 = cljs.core.rest(s__17059__$2);
s__17059__$1 = G__17264;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(row_paths))));
};
var G__17261 = function (var_args){
var p__17056 = null;
if (arguments.length > 0) {
var G__17265__i = 0, G__17265__a = new Array(arguments.length -  0);
while (G__17265__i < G__17265__a.length) {G__17265__a[G__17265__i] = arguments[G__17265__i + 0]; ++G__17265__i;}
  p__17056 = new cljs.core.IndexedSeq(G__17265__a,0,null);
} 
return G__17261__delegate.call(this,p__17056);};
G__17261.cljs$lang$maxFixedArity = 0;
G__17261.cljs$lang$applyTo = (function (arglist__17266){
var p__17056 = cljs.core.seq(arglist__17266);
return G__17261__delegate(p__17056);
});
G__17261.cljs$core$IFn$_invoke$arity$variadic = G__17261__delegate;
return G__17261;
})()
;
var column_width_resizers = (function() { 
var G__17267__delegate = function (p__17069){
var map__17070 = p__17069;
var map__17070__$1 = cljs.core.__destructure_map(map__17070);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17070__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17070__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17071(s__17072){
return (new cljs.core.LazySeq(null,(function (){
var s__17072__$1 = s__17072;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17072__$1);
if(temp__5804__auto__){
var s__17072__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17072__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17072__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17074 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17073 = (0);
while(true){
if((i__17073 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17073);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(column_path));
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__17074,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[column_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_sizes),i),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"column","column",2078222095),style__$1,overlay,new cljs.core.Keyword(null,"column-width","column-width",405119380),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-width-resizer","re-com.nested-v-grid/column-width-resizer",-1509219442),i], null)], null)));

var G__17268 = (i__17073 + (1));
i__17073 = G__17268;
continue;
} else {
var G__17269 = (i__17073 + (1));
i__17073 = G__17269;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17074),re_com$nested_v_grid$nested_v_grid_$_iter__17071(cljs.core.chunk_rest(s__17072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17074),null);
}
} else {
var i = cljs.core.first(s__17072__$2);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(cljs.core.meta(column_path));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(column_path));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_v_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[column_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_sizes),i),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"column","column",2078222095),style__$1,overlay,new cljs.core.Keyword(null,"column-width","column-width",405119380),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-width-resizer","re-com.nested-v-grid/column-width-resizer",-1509219442),i], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17071(cljs.core.rest(s__17072__$2)));
} else {
var G__17270 = cljs.core.rest(s__17072__$2);
s__17072__$1 = G__17270;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths))));
};
var G__17267 = function (var_args){
var p__17069 = null;
if (arguments.length > 0) {
var G__17271__i = 0, G__17271__a = new Array(arguments.length -  0);
while (G__17271__i < G__17271__a.length) {G__17271__a[G__17271__i] = arguments[G__17271__i + 0]; ++G__17271__i;}
  p__17069 = new cljs.core.IndexedSeq(G__17271__a,0,null);
} 
return G__17267__delegate.call(this,p__17069);};
G__17267.cljs$lang$maxFixedArity = 0;
G__17267.cljs$lang$applyTo = (function (arglist__17272){
var p__17069 = cljs.core.seq(arglist__17272);
return G__17267__delegate(p__17069);
});
G__17267.cljs$core$IFn$_invoke$arity$variadic = G__17267__delegate;
return G__17267;
})()
;
var row_headers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17077(s__17078){
return (new cljs.core.LazySeq(null,(function (){
var s__17078__$1 = s__17078;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17078__$1);
if(temp__5804__auto__){
var s__17078__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17078__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17078__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17080 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17079 = (0);
while(true){
if((i__17079 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17079);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
var path_ct = cljs.core.count(row_path);
var end_keypath = ((function (i__17079,s__17078__$1,row_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17080,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16718_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),p1__16718_SHARP_);
});})(i__17079,s__17078__$1,row_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17080,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (i__17079,s__17078__$1,row_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17080,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16717_SHARP_){
return (cljs.core.count(p1__16717_SHARP_) > path_ct);
});})(i__17079,s__17078__$1,row_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17080,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(row_paths))))));
var map__17081 = cljs.core.meta(row_path);
var map__17081__$1 = cljs.core.__destructure_map(map__17081);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17081__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17081__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var row_path_prop = (function (){var G__17082 = row_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17082,(1));
} else {
return G__17082;
}
})();
var cross_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),(function (){var G__17083 = (path_ct - (1));
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__17083 - (1));
} else {
return G__17083;
}
})());
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i);
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i);
if(cljs.core.truth_((function (){var or__5002__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),row_path_prop,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"cross-size","cross-size",615011725),cross_size,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(cljs.core.truth_(branch_end_QMARK_)?"span 1":re_com.nested_v_grid.util.keypath__GT_grid_line_name(end_keypath)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(function (){var G__17084 = cljs.core.count(row_path);
var G__17084__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__17084 - (1)):G__17084);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__17084__$1 - (1));
} else {
return G__17084__$1;
}
})(),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","row-header-label","re-com.nested-v-grid/row-header-label",-135104611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(size - (5))], null),(cljs.core.truth_(leaf_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(column_header_height_total)], null)),(cljs.core.truth_(branch_end_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cross_size - (10))], null))], 0))),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.row_header_label], null))], null));
cljs.core.chunk_append(b__17080,part(new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),keypath,branch_end_QMARK_], null),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null)], null)));

var G__17273 = (i__17079 + (1));
i__17079 = G__17273;
continue;
} else {
var G__17274 = (i__17079 + (1));
i__17079 = G__17274;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17080),re_com$nested_v_grid$nested_v_grid_$_iter__17077(cljs.core.chunk_rest(s__17078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17080),null);
}
} else {
var i = cljs.core.first(s__17078__$2);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
var path_ct = cljs.core.count(row_path);
var end_keypath = ((function (s__17078__$1,row_path,path_ct,i,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16718_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),p1__16718_SHARP_);
});})(s__17078__$1,row_path,path_ct,i,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (s__17078__$1,row_path,path_ct,i,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16717_SHARP_){
return (cljs.core.count(p1__16717_SHARP_) > path_ct);
});})(s__17078__$1,row_path,path_ct,i,s__17078__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(row_paths))))));
var map__17085 = cljs.core.meta(row_path);
var map__17085__$1 = cljs.core.__destructure_map(map__17085);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17085__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17085__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var row_path_prop = (function (){var G__17086 = row_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17086,(1));
} else {
return G__17086;
}
})();
var cross_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),(function (){var G__17087 = (path_ct - (1));
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__17087 - (1));
} else {
return G__17087;
}
})());
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i);
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i);
if(cljs.core.truth_((function (){var or__5002__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),row_path_prop,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"cross-size","cross-size",615011725),cross_size,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(cljs.core.truth_(branch_end_QMARK_)?"span 1":re_com.nested_v_grid.util.keypath__GT_grid_line_name(end_keypath)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(function (){var G__17088 = cljs.core.count(row_path);
var G__17088__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__17088 - (1)):G__17088);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__17088__$1 - (1));
} else {
return G__17088__$1;
}
})(),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","row-header-label","re-com.nested-v-grid/row-header-label",-135104611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(size - (5))], null),(cljs.core.truth_(leaf_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(column_header_height_total)], null)),(cljs.core.truth_(branch_end_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cross_size - (10))], null))], 0))),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.row_header_label], null))], null));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","row-header","re-com.nested-v-grid/row-header",1480240414),keypath,branch_end_QMARK_], null),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17077(cljs.core.rest(s__17078__$2)));
} else {
var G__17275 = cljs.core.rest(s__17078__$2);
s__17078__$1 = G__17275;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(row_paths))));
})();
var column_headers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17089(s__17090){
return (new cljs.core.LazySeq(null,(function (){
var s__17090__$1 = s__17090;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17090__$1);
if(temp__5804__auto__){
var s__17090__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17090__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17090__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17092 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17091 = (0);
while(true){
if((i__17091 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__17091);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
var path_ct = cljs.core.count(column_path);
var end_keypath = ((function (i__17091,s__17090__$1,column_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17092,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16720_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),p1__16720_SHARP_);
});})(i__17091,s__17090__$1,column_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17092,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (i__17091,s__17090__$1,column_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17092,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16719_SHARP_){
return (cljs.core.count(p1__16719_SHARP_) > path_ct);
});})(i__17091,s__17090__$1,column_path,path_ct,i,c__5478__auto__,size__5479__auto__,b__17092,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(column_paths))))));
var map__17093 = cljs.core.meta(column_path);
var map__17093__$1 = cljs.core.__destructure_map(map__17093);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17093__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var branch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17093__$1,new cljs.core.Keyword(null,"branch?","branch?",-999323007));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17093__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var column_path_prop = (function (){var G__17094 = column_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17094,(1));
} else {
return G__17094;
}
})();
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i);
if(cljs.core.truth_((function (){var or__5002__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),column_path_prop,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(cljs.core.truth_(end_keypath)?re_com.nested_v_grid.util.keypath__GT_grid_line_name(end_keypath):(cljs.core.truth_(leaf_QMARK_)?"span 1":"-1"
)),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(function (){var G__17095 = cljs.core.count(column_path);
var G__17095__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__17095 - (1)):G__17095);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__17095__$1 - (1));
} else {
return G__17095__$1;
}
})(),new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","column-header-label","re-com.nested-v-grid/column-header-label",-1851560330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.column_header_label], null))], null));
cljs.core.chunk_append(b__17092,part(new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),keypath,branch_end_QMARK_], null)], null)));

var G__17276 = (i__17091 + (1));
i__17091 = G__17276;
continue;
} else {
var G__17277 = (i__17091 + (1));
i__17091 = G__17277;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17092),re_com$nested_v_grid$nested_v_grid_$_iter__17089(cljs.core.chunk_rest(s__17090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17092),null);
}
} else {
var i = cljs.core.first(s__17090__$2);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
var path_ct = cljs.core.count(column_path);
var end_keypath = ((function (s__17090__$1,column_path,path_ct,i,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16720_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),p1__16720_SHARP_);
});})(s__17090__$1,column_path,path_ct,i,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (s__17090__$1,column_path,path_ct,i,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__16719_SHARP_){
return (cljs.core.count(p1__16719_SHARP_) > path_ct);
});})(s__17090__$1,column_path,path_ct,i,s__17090__$2,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(column_paths))))));
var map__17096 = cljs.core.meta(column_path);
var map__17096__$1 = cljs.core.__destructure_map(map__17096);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17096__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var branch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17096__$1,new cljs.core.Keyword(null,"branch?","branch?",-999323007));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17096__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var column_path_prop = (function (){var G__17097 = column_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17097,(1));
} else {
return G__17097;
}
})();
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i);
if(cljs.core.truth_((function (){var or__5002__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),column_path_prop,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(cljs.core.truth_(end_keypath)?re_com.nested_v_grid.util.keypath__GT_grid_line_name(end_keypath):(cljs.core.truth_(leaf_QMARK_)?"span 1":"-1"
)),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(function (){var G__17098 = cljs.core.count(column_path);
var G__17098__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__17098 - (1)):G__17098);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__17098__$1 - (1));
} else {
return G__17098__$1;
}
})(),new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","column-header-label","re-com.nested-v-grid/column-header-label",-1851560330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_v_grid.parts.column_header_label], null))], null));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","column-header","re-com.nested-v-grid/column-header",-1512590628),keypath,branch_end_QMARK_], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17089(cljs.core.rest(s__17090__$2)));
} else {
var G__17278 = cljs.core.rest(s__17090__$2);
s__17090__$1 = G__17278;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths))));
})();
var corner_headers = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17099(s__17100){
return (new cljs.core.LazySeq(null,(function (){
var s__17100__$1 = s__17100;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17100__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var column_index = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__17100__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_iter__17099_$_iter__17101(s__17102){
return (new cljs.core.LazySeq(null,((function (s__17100__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__17102__$1 = s__17102;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17102__$1);
if(temp__5804__auto____$1){
var s__17102__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17102__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17102__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17104 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17103 = (0);
while(true){
if((i__17103 < size__5479__auto__)){
var row_index = cljs.core._nth(c__5478__auto__,i__17103);
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(row_index + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(column_index + (1))], null)], null);
var edge = corner_header_edges(props__$1);
var border_light = "thin solid #ccc";
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),edge], null)], 0));
var props__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.Keyword(null,"props","props",453281727),props__$2], null))], null));
var borders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_light], null):null)], 0));
cljs.core.chunk_append(b__17104,part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1
,new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__17106 = props__$3;
var G__17106__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__17106,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,borders)
;
if(cljs.core.truth_(show_root_headers_QMARK___$1)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17106__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),(row_index - (1)),new cljs.core.Keyword(null,"column-index","column-index",470522340),(column_index - (1))], null)], 0));
} else {
return G__17106__$1;
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),row_index,column_index], null)], null)));

var G__17279 = (i__17103 + (1));
i__17103 = G__17279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17104),re_com$nested_v_grid$nested_v_grid_$_iter__17099_$_iter__17101(cljs.core.chunk_rest(s__17102__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17104),null);
}
} else {
var row_index = cljs.core.first(s__17102__$2);
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(row_index + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(column_index + (1))], null)], null);
var edge = corner_header_edges(props__$1);
var border_light = "thin solid #ccc";
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),edge], null)], 0));
var props__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header-label","re-com.nested-v-grid/corner-header-label",307115112),new cljs.core.Keyword(null,"props","props",453281727),props__$2], null))], null));
var borders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_light], null):null)], 0));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1
,new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__17107 = props__$3;
var G__17107__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__17107,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,borders)
;
if(cljs.core.truth_(show_root_headers_QMARK___$1)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17107__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),(row_index - (1)),new cljs.core.Keyword(null,"column-index","column-index",470522340),(column_index - (1))], null)], 0));
} else {
return G__17107__$1;
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-v-grid","corner-header","re-com.nested-v-grid/corner-header",1605479369),row_index,column_index], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17099_$_iter__17101(cljs.core.rest(s__17102__$2)));
}
} else {
return null;
}
break;
}
});})(s__17100__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__17100__$1,column_index,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,re_com$nested_v_grid$nested_v_grid_$_iter__17099(cljs.core.rest(s__17100__$1)));
} else {
var G__17280 = cljs.core.rest(s__17100__$1);
s__17100__$1 = G__17280;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})();
var cells = (function (){var iter__5480__auto__ = (function re_com$nested_v_grid$nested_v_grid_$_iter__17108(s__17109){
return (new cljs.core.LazySeq(null,(function (){
var s__17109__$1 = s__17109;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17109__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var ri = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__17109__$1,ri,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_v_grid$nested_v_grid_$_iter__17108_$_iter__17110(s__17111){
return (new cljs.core.LazySeq(null,((function (s__17109__$1,ri,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__17111__$1 = s__17111;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17111__$1);
if(temp__5804__auto____$1){
var s__17111__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17111__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17111__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17113 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17112 = (0);
while(true){
if((i__17112 < size__5479__auto__)){
var ci = cljs.core._nth(c__5478__auto__,i__17112);
var row_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),ri);
var column_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),ci);
var row_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),ri);
var column_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),ci);
var row_meta = cljs.core.meta(row_path);
var column_meta = cljs.core.meta(column_path);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(row_meta);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(column_meta);
} else {
return and__5000__auto__;
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),(function (){var G__17114 = row_path;
var G__17114__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17114,(1)):G__17114);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(row_meta))){
return cljs.core.pop(G__17114__$1);
} else {
return G__17114__$1;
}
})(),new cljs.core.Keyword(null,"column-path","column-path",-733367618),(function (){var G__17115 = column_path;
var G__17115__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17115,(1)):G__17115);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(column_meta))){
return cljs.core.pop(G__17115__$1);
} else {
return G__17115__$1;
}
})(),new cljs.core.Keyword(null,"row-meta","row-meta",354487365),row_meta,new cljs.core.Keyword(null,"column-meta","column-meta",-481642125),column_meta,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.keypath__GT_grid_line_name(row_keypath),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.keypath__GT_grid_line_name(column_keypath)], null)], null);
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","cell-label","re-com.nested-v-grid/cell-label",-2129008445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props__$1], null))], null)], null)], 0));
cljs.core.chunk_append(b__17113,part(new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_path,column_path], null)], null)));

var G__17281 = (i__17112 + (1));
i__17112 = G__17281;
continue;
} else {
var G__17282 = (i__17112 + (1));
i__17112 = G__17282;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17113),re_com$nested_v_grid$nested_v_grid_$_iter__17108_$_iter__17110(cljs.core.chunk_rest(s__17111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17113),null);
}
} else {
var ci = cljs.core.first(s__17111__$2);
var row_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),ri);
var column_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),ci);
var row_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),ri);
var column_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),ci);
var row_meta = cljs.core.meta(row_path);
var column_meta = cljs.core.meta(column_path);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(row_meta);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf?","leaf?",445442965),new cljs.core.Keyword(null,"show?","show?",1543842127))(column_meta);
} else {
return and__5000__auto__;
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),(function (){var G__17117 = row_path;
var G__17117__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17117,(1)):G__17117);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(row_meta))){
return cljs.core.pop(G__17117__$1);
} else {
return G__17117__$1;
}
})(),new cljs.core.Keyword(null,"column-path","column-path",-733367618),(function (){var G__17118 = column_path;
var G__17118__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__17118,(1)):G__17118);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(column_meta))){
return cljs.core.pop(G__17118__$1);
} else {
return G__17118__$1;
}
})(),new cljs.core.Keyword(null,"row-meta","row-meta",354487365),row_meta,new cljs.core.Keyword(null,"column-meta","column-meta",-481642125),column_meta,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_v_grid.util.keypath__GT_grid_line_name(row_keypath),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_v_grid.util.keypath__GT_grid_line_name(column_keypath)], null)], null);
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","cell-label","re-com.nested-v-grid/cell-label",-2129008445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props__$1], null))], null)], null)], 0));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","cell","re-com.nested-v-grid/cell",915213168),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_path,column_path], null)], null)),re_com$nested_v_grid$nested_v_grid_$_iter__17108_$_iter__17110(cljs.core.rest(s__17111__$2)));
} else {
var G__17283 = cljs.core.rest(s__17111__$2);
s__17111__$1 = G__17283;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__17109__$1,ri,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__17109__$1,ri,xs__6360__auto__,temp__5804__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5002__auto__,map__17024,map__17024__$1,props,resize_QMARK_,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__16741,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__16730,map__16730__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths)))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,re_com$nested_v_grid$nested_v_grid_$_iter__17108(cljs.core.rest(s__17109__$1)));
} else {
var G__17284 = cljs.core.rest(s__17109__$1);
s__17109__$1 = G__17284;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(row_paths))));
})();
return part(new cljs.core.Keyword("re-com.nested-v-grid","wrapper","re-com.nested-v-grid/wrapper",-616776584),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","wrapper","re-com.nested-v-grid/wrapper",-616776584),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"after-props","after-props",1914108332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(column_header_height_total),cljs.core.deref(row_height_total)], null)),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),re_com.nested_v_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(row_header_width_total),cljs.core.deref(column_width_total)], null))], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),wrapper_ref_BANG_], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-v-grid","cell-grid","re-com.nested-v-grid/cell-grid",1481952793),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","cell-grid","re-com.nested-v-grid/cell-grid",1481952793),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__17119 = cells;
if(cljs.core.truth_((function (){var and__5000__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__17119,(cljs.core.truth_(resize_row_height_QMARK_)?row_height_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_column_width_QMARK_)?column_width_resizers(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null),new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null)], 0));
} else {
return G__17119;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(row_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(column_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-v-grid","column-header-grid","re-com.nested-v-grid/column-header-grid",2008839869),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","column-header-grid","re-com.nested-v-grid/column-header-grid",2008839869),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__17120 = column_headers;
if(cljs.core.truth_((function (){var and__5000__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__17120,(cljs.core.truth_(resize_column_header_height_QMARK_)?column_height_resizers:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_column_width_QMARK_)?column_width_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null)], 0));
} else {
return G__17120;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(column_cross_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(column_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-v-grid","row-header-grid","re-com.nested-v-grid/row-header-grid",254331951),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","row-header-grid","re-com.nested-v-grid/row-header-grid",254331951),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__17121 = row_headers;
if(cljs.core.truth_((function (){var and__5000__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__17121,(cljs.core.truth_(resize_row_header_width_QMARK_)?row_width_resizers:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_row_height_QMARK_)?row_height_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null)], 0));
} else {
return G__17121;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(row_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(row_cross_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-v-grid","corner-header-grid","re-com.nested-v-grid/corner-header-grid",35380063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-v-grid","corner-header-grid","re-com.nested-v-grid/corner-header-grid",35380063),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__17122 = corner_headers;
if(cljs.core.truth_((function (){var and__5000__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__17122,(cljs.core.truth_(resize_row_header_width_QMARK_)?row_width_resizers:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_column_header_height_QMARK_)?column_height_resizers:null)], 0));
} else {
return G__17122;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(column_cross_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(row_cross_template)], null)], null)], null)),re_com.util.deref_or_value(overlay)], null)], null)], null));
}
})], null));
});

//# sourceMappingURL=re_com.nested_v_grid.js.map
