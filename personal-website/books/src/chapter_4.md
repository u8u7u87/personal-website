# Chapter 4: 异步运行时与 Epoll 循环

高性能异步系统开发的关键在于高效处理 I/O 阻塞。Rust 提供了零成本抽象的异步编程支持。

## 1. Rust 异步机制核心 (Future & Poll)
* **Future trait**: 核心是 `poll` 方法，它接收一个上下文并返回 `Poll::Ready(val)` 或 `Poll::Pending`。
* **Waker**: 当异步事件准备就绪时，底层操作系统的通知会触发 `Waker::wake()`，唤醒 executor 重新调用 `poll`。

## 2. 操作系统底层 I/O 复用 (Epoll)
在 Linux 操作系统中，高并发网络服务通常依赖 Epoll 机制：
* **水平触发 vs. 边缘触发**: 边缘触发 (EPOLLET) 在状态发生变化时仅通知一次，性能更高但需要非阻塞 I/O 配合进行循环读取直至 EAGAIN。
* **事件循环**: Runtime 内部（如 Tokio）的 I/O Driver 通过 `epoll_wait` 收集就绪描述符，并唤醒对应的 Waker 任务。

## 3. 开源推荐与学习资源
* [Tokio 官方文档与设计架构](https://tokio.rs/)
* [Rust Async Book](https://rust-lang.github.io/async-book/)
