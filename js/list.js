/**
 * js实现单向链表的创建，插入，删除
 * 
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

function List(head) {
    if (!(head instanceof Node)) {
        this.head = this.tail = null;
        throw (new Error('请创建Node类型的链表'));
    } else {
        this.head = this.tail = head;
        this.length = 1;
    }
}
/**
 * 在某一个节点后插入新的节点
 * 需要更新长度
 * 后插只会改变tail指向
 */
List.prototype.lastInsertNode = function (newNode, node) {
    // 先判断node是否存在，并且是否是Node类型
    // 显然null不是Node类型，下面可以直接进行插入
    if (node instanceof Node && newNode instanceof Node) {
        newNode.next = node.next;
        node.next = newNode;
        if (node === this.tail) {
            this.tail = newNode; // 更新队尾tail指向
        }
        this.length++;
        return;
    }
    throw (new Error('存在不是Node类型的节点'));
};

/**
 * 在某一个节点之前插入新的节点
 * 需要找到插入节点的前面一个节点
 * 需要更新长度
 * 前插可能会改变head指向
 */
List.prototype.preInsertNode = function (newNode, node) {
    // 先判断node是否存在，并且是否是Node类型
    if (node instanceof Node && newNode instanceof Node) {
        // 先找到node的前一个节点
        const preNode = this.findPreNode(node);
        if (preNode === null) { // node是头节点
            newNode.next = node;
            this.head = newNode;
            this.length++;
        } else if (preNode instanceof Node) {
            newNode.next = node;
            preNode.next = newNode;
            this.length++;
        } else {
            throw (new Error('插入的节点不在链表中'));
        }
        return;
    }
    throw (new Error('存在不是Node类型的节点'));
};

List.prototype.append = function (node) {
    if (!(node instanceof Node)) {
        throw (new Error('node不是Node类型'));
    }
    // 找到tail,执行后插入,同时改变tail的指向
    this.lastInsertNode(node, this.tail);
    return node;
};

/**
 * 获取链表的长度
 */
List.prototype.getLength = function () {
    return this.length; // 会先从实例的属性上获取
};

/**
 * 删除链表中的某一个节点
 */
List.prototype.deleteNode = function (node) {
    const preNode = this.findPreNode(node);
    if (preNode === null) { // node是头节点
        this.head = node.next;
        node = null;
        this.length--;
    } else if (preNode instanceof Node) {
        preNode.next = node.next;
        node = null;
    } else {
        throw (new Error('node不在当前链表'));
    }
};
// 返回链表的头
List.prototype.getHead = function () {
    return this.head;
};

List.prototype.findPreNode = function (node) {
    let head = this.head;
    if (head === this.head) {
        return null;
    }
    while (head) {
        if (head.next === node) {
            return head;
        }
        head = head.next;
    }
    return -1; // node不在当前链表中,或者压根就不是Node类型
};

List.prototype.outputNodeValue = function () {
    let head = this.head;
    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    return values;
};


/*****  测试代码  ****/


const headNode = new Node(1);
const list = new List(headNode);
const node2 = list.append(new Node(2));
const node3 = list.append(new Node(3));
const node4 = list.append(new Node(4));

list.preInsertNode(new Node(0), list.head);
list.lastInsertNode(new Node(5), list.tail);

console.log(list.outputNodeValue());
console.log(list.length);
console.log('head val: ', list.head && list.head.val);
console.log('tail val: ', list.tail && list.tail.val);




