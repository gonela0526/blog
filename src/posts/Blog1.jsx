import React from 'react';
import '../components/BlogPage.css';
import { useParams } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import coverImage from '../assets/images/blog1.png';
import hljs from 'highlight.js';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog1 = () => {
  const { slug } = useParams();

  return (
    <>
    <div className="sticky-navbar">
        <Navbar />
      </div>
    <div className="blog-container">
      <article className="blog-post">
        {/* <img src={coverImage} alt="coverImage" /> */}
        <h1>Java 8 Features Explained with Examples</h1>
        {/* <p className="meta">By John Doe · Published on May 24, 2025 · 7 min read</p> */}

        <div className="blog-content">
          <p>Java 8, released in March 2014, was a revolutionary release in the history of Java programming. It introduced a variety of new features that drastically changed the way developers write Java code. These features brought functional programming concepts, more concise syntax, improved API capabilities, and performance optimizations.</p>
          <p>In this blog, we’ll take a deep dive into <strong>the major Java 8 features</strong>, along with <strong>clear explanations and code examples</strong> to help you understand and implement them effectively.</p>

          <h2>1.Lambda Expressions</h2>
          <p>Lambda expressions allow you to write anonymous functions—a block of code that can be passed around as data.</p>
          <h3>
            Syntax:
          </h3>
          <CodeBlock language="java" value="(parameters) -> expression" />
            <h3>Example:</h3>
  <CodeBlock
              language="java"
              value={`import java.util.*;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Jack", "Jill");

        // Before Java 8
        for (String name : names) {
            System.out.println(name);
        }

        // With Lambda
        names.forEach(name -> System.out.println(name));
    }
}
`}/>
            <h3>Use cases:</h3>
            <li>Event handling</li>
            <li>Iterations</li>
            <li>Functional interfaces (as arguments)</li>

    <h2>2.Functional Interfaces</h2>
    <p>A functional interface is an interface with exactly one abstract method. Java 8 introduces the <mark>@FunctionalInterface</mark> annotation to enforce this rule.</p>
    <h3>Example:</h3>
    <CodeBlock
            language="java"
            value={`@FunctionalInterface
interface Calculator {
    int operation(int a, int b);
}

public class FunctionalInterfaceExample {
    public static void main(String[] args) {
        Calculator add = (a, b) -> a + b;
        System.out.println(add.operation(10, 20)); // Output: 30
    }
}`} 
    />
    <h3>Common Java Functional Interfaces:</h3>
    <ul>
        <li><mark>Runnable</mark></li>
        <li><mark>Callable</mark></li>
        <li><mark>Comparator</mark></li>
        <li><mark>Function</mark>,<mark>Predicate</mark>,<mark>Supplier</mark>,<mark>Consumer</mark>(from <mark>java.util.function</mark> package)</li>
    </ul>         
          
    <h2>3. Method References</h2>
    <p>Method references provide a way to refer to methods without executing them. They make code cleaner when used with lambda expressions.</p>
    <h3>Syntax:</h3>
    <CodeBlock language="java" value="ClassName::methodName" />
    <h3>Example:</h3>
    <CodeBlock
            language="java"
            value={`import java.util.*;
public class MethodRefExample {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("a", "b", "c");

        // Using lambda
        list.forEach(s -> System.out.println(s));

        // Using method reference
        list.forEach(System.out::println);
    }
}`} 
    />

                <h3>Types of Method References:</h3>
    <ul>
        <li><mark>Static Method Reference</mark>: ClassName::staticMethod</li>
        <li><mark>Instance Method Reference of a Particular Object</mark>: instance::instanceMethod</li>
        <li><mark>Instance Method Reference of an Arbitrary Object of a Particular Type</mark>: ClassName::instanceMethod</li>
        <li><mark>Constructor Reference</mark>: ClassName::new</li>
    </ul>   
<h2>4. Stream API</h2>
<p>The Stream API is used to process collections in a functional style. It supports filtering, mapping, sorting, and more, making it a powerful tool for data manipulation.</p>
<h3>Example:</h3>
<CodeBlock
            language="java"
            value={`import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Steve", "Anna", "Mike", "Sandy");

        List<String> filtered = names.stream()
                .filter(name -> name.startsWith("S"))
                .collect(Collectors.toList());

        System.out.println(filtered); // Output: [Steve, Sandy]
    }
}
`}
    />
    <h3>Common Stream Operations:</h3>
    <ul>
        <li><mark>filter()</mark>: Filters elements based on a condition</li>
        <li><mark>map()</mark>: Transforms elements</li>
        <li><mark>sorted()</mark>: Sorts elements</li>  
        <li><mark>collect()</mark>: Collects results into a collection</li>
        <li><mark>forEach()</mark>: Performs an action for each element</li>
        <li><mark>reduce()</mark>: Combines elements into a single result</li>
    </ul>   
<h2>5. Default Methods in Interfaces</h2>
<p>
  Java 8 allows interfaces to have method implementations using the <mark>default</mark> keyword. This helps in adding new functionality without breaking existing code.
</p>
<h3>Example:</h3>
<CodeBlock
  language="java"
  value={`interface Vehicle {
    default void start() {
        System.out.println("Vehicle started");
    }
}

class Car implements Vehicle {
    // inherits default method
}

public class DefaultMethodExample {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
    }
}`}
/>

<h2>6. Static Methods in Interfaces</h2>
<p>
  Along with default methods, Java 8 also allows static methods inside interfaces.
</p>
<h3>Example:</h3>
<CodeBlock
  language="java"
  value={`interface MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

public class StaticMethodExample {
    public static void main(String[] args) {
        System.out.println(MathUtils.add(5, 7)); // Output: 12
    }
}`}
/>

<h2>7. Optional Class</h2>
<p>
  The <mark>Optional</mark> class is a container that may or may not contain a value. It helps in avoiding null pointer exceptions.
</p>
<h3>Example:</h3>
<CodeBlock
  language="java"
  value={`import java.util.Optional;

public class OptionalExample {
    public static void main(String[] args) {
        Optional<String> optional = Optional.ofNullable(getName());

        optional.ifPresent(name -> System.out.println("Hello, " + name));
    }

    static String getName() {
        return "John"; // return null to test empty case
    }
}`}
/>

<h2>8. New Date and Time API (<mark>java.time</mark>)</h2>
<p>
  Java 8 introduced a brand-new Date and Time API that is more powerful and intuitive compared to <mark>Date</mark> and <mark>Calendar</mark>.
</p>
<h3>Example:</h3>
<CodeBlock
  language="java"
  value={`import java.time.*;

public class DateTimeExample {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        LocalDateTime dateTime = LocalDateTime.now();

        System.out.println("Date: " + date);
        System.out.println("Time: " + time);
        System.out.println("DateTime: " + dateTime);
    }
}`}
/>
<p>Classes to Explore:</p>
<ul>
  <li><mark>LocalDate</mark></li>
  <li><mark>LocalTime</mark></li>
  <li><mark>LocalDateTime</mark></li>
  <li><mark>ZonedDateTime</mark></li>
  <li><mark>Duration</mark></li>
  <li><mark>Period</mark></li>
</ul>

<h2>9. Collectors Utility</h2>
<p>
  Collectors are used to accumulate elements into collections or strings when using streams.
</p>
<h3>Example:</h3>
<CodeBlock
  language="java"
  value={`import java.util.*;
import java.util.stream.*;

public class CollectorsExample {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C");

        String result = list.stream().collect(Collectors.joining(", "));
        System.out.println(result); // Output: A, B, C
    }
}`}
/>

<h2>10. Parallel Streams</h2>
<p>
  Java 8 supports parallel processing of streams to enhance performance using multiple cores.
</p>
<h3>Example:</h3>
<CodeBlock
  language="java"
  value={`import java.util.*;
import java.util.stream.*;

public class ParallelStreamExample {
    public static void main(String[] args) {
        List<Integer> list = IntStream.range(1, 1000).boxed().collect(Collectors.toList());

        list.parallelStream().forEach(System.out::println);
    }
}`}
/>

<h2>Conclusion</h2>
<p>
  Java 8 introduced a major evolution in the Java language with powerful features like Lambda expressions, Stream API, and the new Date-Time API, making Java more expressive, readable, and efficient. Understanding and applying these features will make your code more modern and concise, and also prepare you for future advancements in Java.
</p>
<h3>What's Next?</h3>
<p>Explore advanced topics like:</p>
<ul>
  <li>Custom collectors</li>
  <li>CompletableFuture for async programming</li>
  <li>Functional programming patterns in Java</li>
</ul>
<p><strong>Happy Coding!</strong></p>
        </div>
      </article>
    </div>
    <Footer />
    </>
  );
};

export default Blog1;
